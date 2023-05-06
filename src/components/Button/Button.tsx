import React from "react"
import { button, ButtonVariants } from "./button.css"
import { Box, BoxProps } from "../layout"

export const Button: React.FC<
  ButtonVariants &
    BoxProps & {
      isFullWidth?: true
      leftIcon?: React.ReactNode
      rightIcon?: React.ReactNode
    }
> = ({
  variant,
  size,
  isFullWidth,
  children,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const buttonClass = button({ variant, size })
  return (
    <Box
      as="button"
      type="button"
      disabled={variant === `disabled`}
      width={isFullWidth ? `full` : undefined}
      {...rest}
      gap={leftIcon || rightIcon ? 8 : undefined}
      className={`${buttonClass}`}
    >
      {rightIcon && rightIcon}
      {children}
      {leftIcon && leftIcon}
    </Box>
  )
}
