import React from "react"
import { button, ButtonVariants } from "./button.css"
import { Box, BoxProps } from "../layout"

export const Button: React.FC<
  ButtonVariants & BoxProps & { isFullWidth?: true }
> = ({ variant, size, isFullWidth, children, ...rest }) => {
  const buttonClass = button({ variant, size })
  return (
    <Box
      as="button"
      type="button"
      disabled={variant === `disabled`}
      width={isFullWidth ? `full` : undefined}
      {...rest}
      className={`${buttonClass}`}
    >
      {children}
    </Box>
  )
}
