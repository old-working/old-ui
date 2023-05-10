import { createThemeContract } from "@vanilla-extract/css"
import { shadows } from "../tokens/shadow"
import { radii } from "../tokens/radii"
import { space } from "../tokens/space"
import { container } from "../tokens/container"
import {
  letterSpacings,
  fontSizes,
  fontWeights,
  lineHeights,
} from "../tokens/typography"
import { nullColors } from "../tokens/colors"

export const BASE = {
  borderRadius: radii,
  shadows,
  space,
  letterSpacings,
  fontSizes,
  fontWeights,
  lineHeights,
  container,
}

export const vars = createThemeContract({
  ...BASE,
  colors: nullColors,
})
