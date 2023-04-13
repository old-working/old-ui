import { vars } from "../../style/theme/contract.css"

export const CHIP_VARIANTS = {
  outlined: {
    background: vars.colors.background,
    borderColor: vars.colors.textSecondary,
    color: vars.colors.textSecondary,
  },
  blue: {
    background: vars.colors.labelBlue,
    borderColor: vars.colors.primary,
    color: vars.colors.primary,
  },
  yellow: {
    background: vars.colors.labelYellow,
    borderColor: vars.colors.secondary,
    color: vars.colors.secondary,
  },
  green: {
    background: vars.colors.labelGreen,
    borderColor: vars.colors.tertiary,
    color: vars.colors.tertiary,
  },
  orange: {
    background: vars.colors.labelOrange,
    borderColor: vars.colors.warning,
    color: vars.colors.warning,
  },
  red: {
    background: vars.colors.labelRed,
    borderColor: vars.colors.error,
    color: vars.colors.error,
  },
}

export const CHIP_SIZE = {
  small: {
    maxHeight: 16,
    px: 12,
    py: 4,
    minHeight: 16,
    minWidth: 16,
  },
  medium: {
    maxHeight: 24,
    px: 12,
    py: 8,
    minHeight: 24,
    minWidth: 24,
  },
}

export type ChipVariant = keyof typeof CHIP_VARIANTS
export type ChipSize = keyof typeof CHIP_SIZE
