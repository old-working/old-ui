import { style, styleVariants } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "../../style/sprinkles.css"
import { vars } from "../../style/theme/contract.css"
import {
  blue,
  green,
  purple,
  yellow,
  red,
  theme,
  disabled as disabledColor,
  ghost as ghostColor,
  orange,
} from "./color-scheme.css"

const base = style({
  borderRadius: vars.borderRadius[32],
  fontWeight: vars.fontWeights[500],
  border: `none`,
  cursor: `pointer`,
  transition: `all 0.2s linear`,
  userSelect: `none`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  msUserSelect: `none`,
  WebkitUserSelect: `none`,
})

export const text = style({
  borderRadius: vars.borderRadius[0],
  fontWeight: vars.fontWeights[500],
  paddingLeft: `0 !important`,
  paddingRight: `0 !important`,
})

const colorScheme = {
  purple,
  yellow,
  blue,
  green,
  red,
  orange,
  theme,
  disabled: disabledColor,
  ghost: ghostColor,
}

export const colorSchemeVariants = styleVariants(colorScheme, (value) => [
  base,
  value,
])

const XsSize = sprinkles({
  maxHeight: 24,
  minWidth: 24,
  px: 12,
  py: 4,
  fontSize: 10,
})

const SmSize = sprinkles({
  maxHeight: 32,
  minWidth: 32,
  px: 16,
  py: 8,
  fontSize: 12,
})

const MdSize = sprinkles({
  maxHeight: 44,
  minWidth: 44,
  px: 24,
  py: 12,
  fontSize: 16,
})

const LgSize = sprinkles({
  maxHeight: 52,
  minWidth: 52,
  px: 32,
  py: 16,
  fontSize: 16,
})

export const button = recipe({
  base,
  variants: {
    variant: {
      solid: {},
      text,
    },
    size: {
      xs: XsSize,
      sm: SmSize,
      md: MdSize,
      lg: LgSize,
    },
  },
  defaultVariants: {
    variant: `solid`,
    size: `md`,
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
export type ColorSchemeVariants = keyof typeof colorSchemeVariants
