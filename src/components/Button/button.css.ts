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

// const primary = style({
//   background: vars.colors.primary,
//   color: vars.colors.background,
//   borderColor: vars.colors.primary,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: `${vars.colors.buttonPrimaryHover} !important`,
//     },
//   },
// })

// const secondary = style({
//   background: vars.colors.buttonSecondary,
//   borderColor: vars.colors.buttonSecondary,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: `${vars.colors.buttonSecondaryHover} !important`,
//     },
//   },
// })

// const tertiary = style({
//   background: vars.colors.buttonTertiary,
//   borderColor: vars.colors.buttonTertiary,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: `${vars.colors.buttonTertiaryHover} !important`,
//     },
//   },
// })

// const outline = style({
//   background: vars.colors.background,
//   borderColor: vars.colors.textPrimary,
//   color: vars.colors.textSecondary,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: `${vars.colors.textPrimary} !important`,
//       color: vars.colors.background,
//     },
//   },
// })

// const disabled = style({
//   background: vars.colors.buttonDisabled,
//   borderColor: vars.colors.buttonDisabled,
//   color: vars.colors.textDisabled,
//   cursor: `not-allowed`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: vars.colors.buttonDisabled,
//       borderColor: vars.colors.buttonDisabled,
//     },
//   },
// })

// const ghost = style({
//   background: `transparent`,
//   borderColor: `transparent`,
//   color: vars.colors.textPrimary,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: vars.colors.buttonDisabled,
//       color: vars.colors.textLight,
//     },
//   },
// })

// const purpleLegacy = style({
//   background: vars.colors.purple200,
//   borderColor: vars.colors.purple200,
//   color: `white`,
//   cursor: `pointer`,
//   selectors: {
//     "&:is(:hover, :focus, :active)": {
//       background: vars.colors.purple400,
//       borderColor: vars.colors.purple400,
//     },
//   },
// })

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
