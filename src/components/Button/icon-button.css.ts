import { style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { vars } from "../../style/theme/contract.css"

const base = style({
  borderRadius: vars.borderRadius[9999],
  fontWeight: vars.fontWeights[500],
  cursor: `pointer`,
  transition: `all 0.2s linear`,
  userSelect: `none`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,

  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${vars.colors.buttonDisabled}`,
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
