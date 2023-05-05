import React from "react"
import { Box, BoxProps } from "../layout"
import { icon, IconVariants } from "./icon-button.css"

export const IconButton: React.FC<BoxProps & IconVariants> = ({
  size,
  children,
  ...rest
}) => {
  const iconClass = icon({ size })
  return (
    <Box {...rest} className={`${iconClass}`}>
      {children}
    </Box>
  )
}
