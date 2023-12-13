import React from "react"
import { HTMLProps } from "../../../core"
import { BaseBox } from "../../../core/components/UiBox/BaseBox"
import { Sprinkles } from "../../../style/sprinkles.css"
import { Space } from "../../../style/tokens/space"

interface SVGICON extends Omit<HTMLProps<"svg">, "color"> {}

// export interface SvgIconProps extends HTMLProps<"svg"> {}

export interface SvgIconProps extends SVGICON {
  /**
   * Shorthand for `width` and `height` atom styles.
   */
  size?: Space

  /**
   * Shorthand for `color` atom style.
   */
  color?: Sprinkles["color"]
}

export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  ({ sprinkles, size = 24, color, ...props }, ref) => (
    <BaseBox
      as="svg"
      {...props}
      ref={ref}
      atoms={{
        width: size,
        height: size,
        color,
        ...sprinkles,
      }}
    />
  )
)
