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
    lineHeight: 78,
    letterSpacing: `-2`,
  },
  "4xl": {
    fontWeight: 400,
    fontSize: 56,
    lineHeight: 68,
    letterSpacing: `-1.5`,
  },
  "3xl": {
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59,
    letterSpacing: `-1`,
  },
  "2xl": {
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: `-0.5`,
  },
  xl: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: `-0.5`,
  },
  lg: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: `-0.2`,
  },
  md: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: `-0.2`,
  },
  sm: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: `-0.2`,
  },
  xs: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: `-0.2`,
  },
  xxs: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
} satisfies Record<string, TextAtoms>
