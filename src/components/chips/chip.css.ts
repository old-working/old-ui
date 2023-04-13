import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { CHIP_VARIANTS } from "./constant"

const base = style({
  borderRadius: 32,
  borderWidth: 1,
  borderStyle: `solid`,
  userSelect: `none`,
  minWidth: 0,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontSize: 10,
  lineHeight: 12,
  fontWeight: 600,
})

export const chipsStyle = recipe({
  base,
  variants: {
    variant: {
      ...CHIP_VARIANTS,
    },
  },
  defaultVariants: {
    variant: `yellow`,
  },
})
