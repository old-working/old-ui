import React from "react"
import clsx from "clsx"
import { Box, BoxProps } from "../layout"
import {
  baseContainerStyle,
  container,
  ContainerVariants,
} from "./container.css"
import { ResponsiveValue } from "../../style/sprinkles.css"
import { getFullyResponsiveValue } from "../../style/utils/getFullyResponse"
import { CONTAINER_SPACE_ELEMENTS } from "./constants"

export type ContainerProps = BoxProps & ContainerVariants

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = `2xl`,
  className,
  ...rest
}) => {
  const containerClass = container({ variant })
  return (
    <Box {...rest} className={clsx(containerClass, className)}>
      {children}
    </Box>
  )
}

type ResponsiveContainerVariants = ResponsiveValue<
  NonNullable<NonNullable<ContainerVariants>["variant"]>
>

const ResponsiveVariants = {
  "2xl": [`mobile`, `md`, `lg`, `xl`, `2xl`],
  "2xl-full": [`fullWidth`, `fullWidth`, `lg`, `xl`, `2xl`],
  xl: [`mobile`, `md`, `lg`, `xl`],
  "xl-full": [`fullWidth`, `fullWidth`, `lg`, `xl`],
  lg: [`mobile`, `md`, `lg`],
  "lg-full": [`fullWidth`, `fullWidth`, `lg`],
  md: [`mobile`, `md`],
  "md-full": [`fullWidth`, `md`],
  sm: [`mobile`, `sm`],
  "sm-full": [`fullWidth`, `sm`],
  mobile: [`mobile`],
  "mobile-full": [`fullWidth`, `mobile`],
} satisfies Record<string, ResponsiveContainerVariants>

type ResponsiveVariantsKeys = keyof typeof ResponsiveVariants

export type ResponsiveContainerProps = BoxProps & {
  variant: ResponsiveVariantsKeys
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  variant = `2xl`,
  ...rest
}) => {
  const responsiveContainerObj = getFullyResponsiveValue(
    ResponsiveVariants[variant],
    `2xl`
  )

  const atoms = Object.entries(responsiveContainerObj).reduce(
    (acc, [breakpoint, rule]) => ({
      maxWidth: {
        // eslint-disable-next-line no-underscore-dangle
        ...acc.maxWidth,
        [breakpoint]: CONTAINER_SPACE_ELEMENTS[rule].maxWidth,
      },
      width: {
        // eslint-disable-next-line no-underscore-dangle
        ...acc.width,
        [breakpoint]: CONTAINER_SPACE_ELEMENTS[rule].width,
      },
    }),
    {
      maxWidth: {},
      width: {},
    }
  )

  return (
    <Box {...rest} {...atoms} className={clsx(className, baseContainerStyle)}>
      {children}
    </Box>
  )
}
