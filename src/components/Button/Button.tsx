import React from "react"
import { button, ButtonVariants } from "./button.css"
import { Box, BoxProps } from "../layout"
import { Body } from "../typography"

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
