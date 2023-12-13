import React, { Children } from "react"
import { SvgIcon, SvgIconProps } from "./SvgIcon"

export type CreateIconOptions = {
  viewBox?: string
  path?: React.ReactElement | React.ReactElement[]
  d?: string
  displayName?: string
  defaultProps?: SvgIconProps
}

export function createIcon({
  viewBox = `0 0 24 24`,
  defaultProps,
  d,
  displayName,
  ...options
}: CreateIconOptions) {
  const path = Children.toArray(options.path)

  const Comp = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
    <SvgIcon viewBox={viewBox} {...props} {...defaultProps} ref={ref}>
      {path.length ? path : <path fill="currentColor" d={d} />}
    </SvgIcon>
  ))

  Comp.displayName = displayName

  return Comp
}
