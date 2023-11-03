import { Sprinkles } from "../../style/sprinkles.css"

type TextAtoms = Pick<
  Sprinkles,
  "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
>
export const DESIGN_TEXT_ELEMENTS = {
  "7xl": {
    fontWeight: 400,
    fontSize: 120,
    lineHeight: 180,
    letterSpacing: `-2.5`,
  },
  "6xl": {
    fontWeight: 400,
    fontSize: 96,
    lineHeight: 144,
    letterSpacing: `-2`,
  },
  "5xl": {
    fontWeight: 400,
    fontSize: 64,
    lineHeight: 96,
    letterSpacing: `-2`,
  },
  "4xl": {
    fontWeight: 400,
    fontSize: 56,
    lineHeight: 84,
    letterSpacing: `-1.5`,
  },
  "3xl": {
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: `-1`,
  },
  "2xl": {
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 60,
    letterSpacing: `-0.5`,
  },
  xxl: {
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: `-0.5`,
  },
  xl: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: `-0.5`,
  },
  lg: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 27,
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
    lineHeight: 21,
    letterSpacing: `-0.2`,
  },
  xs: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: `-0.2`,
  },
  xxs: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
} satisfies Record<string, TextAtoms>
