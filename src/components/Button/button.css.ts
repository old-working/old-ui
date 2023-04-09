import { style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "../../style/sprinkles.css"
import { vars } from "../../style/theme/contract.css"

const base = style({
  borderRadius: vars.borderRadius[32],
  borderWidth: 1,
  borderStyle: `solid`,
  fontWeight: vars.fontWeights[600],
  cursor: `pointer`,
  transition: `all 0.2s linear`,
  userSelect: `none`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
})

const primary = style({
  background: vars.colors.primary,
  color: vars.colors.background,
  borderColor: vars.colors.primary,
  cursor: `pointer`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${vars.colors.buttonPrimaryHover} !important`,
    },
  },
})

const secondary = style({
  background: vars.colors.buttonSecondary,
  borderColor: vars.colors.buttonSecondary,
  cursor: `pointer`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${vars.colors.buttonSecondaryHover} !important`,
    },
  },
})

const tertiary = style({
  background: vars.colors.buttonTertiary,
  borderColor: vars.colors.buttonTertiary,
  cursor: `pointer`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${vars.colors.buttonTertiaryHover} !important`,
    },
  },
})

const outline = style({
  background: vars.colors.background,
  borderColor: vars.colors.textPrimary,
  color: vars.colors.textSecondary,
  cursor: `pointer`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: `${vars.colors.textPrimary} !important`,
      color: vars.colors.background,
    },
  },
})

const disabled = style({
  background: vars.colors.buttonDisabled,
  borderColor: vars.colors.buttonDisabled,
  color: vars.colors.textDisabled,
  cursor: `not-allowed`,
  selectors: {
    "&:is(:hover, :focus, :active)": {
      background: vars.colors.buttonDisabled,
      borderColor: vars.colors.buttonDisabled,
    },
  },
})

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
      primary,
      secondary,
      tertiary,
      outline,
      disabled,
    },
    size: {
      xs: XsSize,
      sm: SmSize,
      md: MdSize,
      lg: LgSize,
    },
  },
  defaultVariants: {
    variant: `primary`,
    size: `md`,
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
