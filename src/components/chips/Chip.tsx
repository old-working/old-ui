import React from "react"
import clsx from "clsx"
import { forwardRef, HTMLProps } from "../../core"
import { Box } from "../layout"
import { ChipSize, ChipVariant, CHIP_SIZE } from "./constant"
import { chipsStyle } from "./chip.css"
import { ResponsiveValue } from "../../style/sprinkles.css"
import { getFullyResponsiveValue } from "../../style/utils/getFullyResponse"

interface ChipOptions {
  variant: ChipVariant
  size: ResponsiveValue<ChipSize>
}

export interface ChipProps
  extends Omit<HTMLProps<"div">, "color">,
    ChipOptions {}

export const Chip = forwardRef<ChipProps, "div">(
  (
    {
      className = ``,
      variant = `yellow`,
      size = `small`,
      children,
      sprinkles: sprinklesProp,
      ...rest
    },
    ref
  ) => {
    const chipSizeObj = getFullyResponsiveValue(size, `medium`)
    const atoms = React.useMemo(
      () =>
        Object.entries(chipSizeObj).reduce(
          (acc, [breakpoint, rule]) => ({
            ...acc,
            px: {
              ...acc.px,
              [breakpoint]: CHIP_SIZE[rule].px,
            },
            py: {
              ...acc.py,
              [breakpoint]: CHIP_SIZE[rule].py,
            },
            maxHeight: {
              ...acc.maxHeight,
              [breakpoint]: CHIP_SIZE[rule].maxHeight,
            },
            minHeight: {
              ...acc.minHeight,
              [breakpoint]: CHIP_SIZE[rule].minHeight,
            },
            minWidth: {
              ...acc.minWidth,
              [breakpoint]: CHIP_SIZE[rule].minWidth,
            },
          }),
          {
            px: {},
            py: {},
            maxHeight: {},
            minHeight: {},
            minWidth: {},
          }
        ),
      [chipSizeObj]
    )
    return (
      <Box
        ref={ref}
        className={clsx(chipsStyle({ variant }), className)}
        {...sprinklesProp}
        {...atoms}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)
