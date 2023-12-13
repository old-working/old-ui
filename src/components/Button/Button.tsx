import React from "react"
import clsx from "clsx"
import {
  button,
  ButtonVariants,
  colorSchemeVariants,
  ColorSchemeVariants,
} from "./button.css"
import { Box, BoxProps } from "../layout"
import { Body } from "../typography"

export const Button: React.FC<
  ButtonVariants &
    BoxProps & {
      colorScheme?: ColorSchemeVariants
      isFullWidth?: true
      leftIcon?: React.ReactNode
      rightIcon?: React.ReactNode
    }
> = ({
  variant,
  colorScheme = `purple`,
  size,
  isFullWidth,
  children,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const buttonClass = button({ variant, size })
  const colorSchemeClass = colorSchemeVariants[colorScheme]

  return (
    <Box
      as="button"
      type="button"
      disabled={colorScheme === `disabled`}
      width={isFullWidth ? `full` : undefined}
      {...rest}
      gap={leftIcon || rightIcon ? 8 : undefined}
      className={clsx(buttonClass, colorSchemeClass, rest.className)}
    >
      {leftIcon && leftIcon}
      <Body
        variant="md"
        fontWeight={600}
        sprinkles={{ __color: `inherit`, __fontSize: `inherit` }}
      >
        {children}
      </Body>
      {rightIcon && rightIcon}
    </Box>
  )
}
