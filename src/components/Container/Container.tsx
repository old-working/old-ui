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
  "2xl": [`2xl`, `lg`, `md`, `mobile`, `mobile`],
  "2xl-full": [`2xl`, `lg`, `md`, `mobile`, `fullWidth`], // "2xl-full" is a custom variant
  xl: [`xl`, `lg`, `md`, `mobile`, `mobile`],
  "xl-full": [`xl`, `lg`, `md`, `mobile`, `fullWidth`],
  lg: [`lg`, `lg`, `md`, `mobile`, `mobile`],
  "lg-full": [`lg`, `lg`, `md`, `mobile`, `fullWidth`],
  md: [`md`, `md`, `md`, `mobile`, `mobile`],
  "md-full": [`md`, `md`, `md`, `mobile`, `fullWidth`],
  sm: [`sm`, `sm`, `sm`, `mobile`, `mobile`],
  "sm-full": [`sm`, `sm`, `sm`, `mobile`, `fullWidth`],
  mobile: [`mobile`, `mobile`, `mobile`, `mobile`, `mobile`],
  "mobile-full": [`mobile`, `mobile`, `mobile`, `mobile`, `fullWidth`],
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
