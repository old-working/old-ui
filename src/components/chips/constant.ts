import { vars } from "../../style/theme/contract.css"

export const CHIP_VARIANTS = {
  outlined: {
    background: vars.colors.background,
    borderColor: vars.colors.textSecondary,
    color: vars.colors.textSecondary,
  },
  blue: {
    background: vars.colors.labelBlue,
    borderColor: `transparent`,
    color: vars.colors.blue200,
  },
  yellow: {
    background: vars.colors.labelYellow,
    borderColor: `transparent`,
    color: vars.colors.yellow300,
  },
  green: {
    background: vars.colors.labelGreen,
    borderColor: `transparent`,
    color: vars.colors.green200,
  },
  orange: {
    background: vars.colors.labelOrange,
    borderColor: `transparent`,
    color: vars.colors.orange200,
  },
  red: {
    background: vars.colors.labelRed,
    borderColor: `transparent`,
    color: vars.colors.red200,
  },
  purple: {
    background: vars.colors.labelPurple,
    borderColor: `transparent`,
    color: vars.colors.purple200,
  },
}

export const CHIP_SIZE = {
  small: {
    maxHeight: 16,
    px: 12,
    minHeight: 16,
    minWidth: 16,
  },
  medium: {
    maxHeight: 24,
    px: 12,
    minHeight: 24,
    minWidth: 24,
  },
}

export type ChipVariant = keyof typeof CHIP_VARIANTS
export type ChipSize = keyof typeof CHIP_SIZE
