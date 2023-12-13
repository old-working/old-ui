import { style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "../../style/theme/contract.css"
import { colorPalette, darkThemeClass } from "../../style"

const base = style({
  borderRadius: vars.borderRadius[9999],
  fontWeight: vars.fontWeights[500],
  cursor: `pointer`,
  transition: `all 0.2s linear`,
  userSelect: `none`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  background: colorPalette.grey20,
  color: `black`,
  fill: `black`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${colorPalette.grey50}`,
    },
    [`${darkThemeClass} &`]: {
      background: `${colorPalette.grey400}`,
      color: `white`,
      fill: `white`,
    },
    [`${darkThemeClass} &:is(:hover, :focus, :active)`]: {
      background: `${colorPalette.grey500}`,
    },
  },
})

const sm = style({
  width: 24,
  height: 24,
})

const md = style({
  width: 36,
  height: 36,
})

export const icon = recipe({
  base,
  variants: {
    size: {
      sm,
      md,
    },
  },
  defaultVariants: {
    size: `md`,
  },
})

export type IconVariants = RecipeVariants<typeof icon>
