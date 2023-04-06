import { createTheme } from "@vanilla-extract/css"
import { vars, BASE } from "./contract.css"
import { lightThemeColors, darkThemeColors } from "../tokens/colors"

export const darkThemeClass = createTheme(vars, {
  colors: darkThemeColors,
  ...BASE,
})

export const lightThemeClass = createTheme(vars, {
  colors: lightThemeColors,
  ...BASE,
})
