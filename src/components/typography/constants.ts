import { Sprinkles } from "../../style/sprinkles.css"

type TextAtoms = Pick<
  Sprinkles,
  "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
>
export const DESIGN_TEXT_ELEMENTS = {
  "7xl": {
    fontWeight: 400,
    fontSize: 120,
    lineHeight: 144,
    letterSpacing: `-2.5`,
  },
  "6xl": {
    fontWeight: 400,
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: `-2`,
  },
  "5xl": {
    fontWeight: 400,
    fontSize: 64,
    lineHeight: 72,
    letterSpacing: `-2`,
  },
  "4xl": {
    fontWeight: 400,
    fontSize: 56,
    lineHeight: 64,
    letterSpacing: `-1.5`,
  },
  "3xl": {
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: `-1`,
  },
  "2xl": {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: `-0.5`,
  },
  xl: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: `-0.5`,
  },
  lg: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: `-0.2`,
  },
  md: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: `-0.2`,
  },
  sm: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: `-0.2`,
  },
  xs: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: `-0.2`,
  },
  xxs: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
} satisfies Record<string, TextAtoms>
