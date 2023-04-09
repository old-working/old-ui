import { style } from "@vanilla-extract/css"
import { vars } from "../../style/theme/contract.css"

export const colorTextPrimary = style({
  color: vars.colors.textPrimary,
})

export const textDecorationUnderline = style({
  textDecoration: `underline`,
})

export const textTransformUppercase = style({
  textTransform: `uppercase`,
})
