import {
  defineProperties,
  createSprinkles,
  ConditionalValue,
  createNormalizeValueFn,
} from "@vanilla-extract/sprinkles"
import { breakpointsName, minMediaQuery } from "./tokens/breakpoints"
import {
  colorProperties,
  responsiveProps,
  unresponsiveProps,
  responsiveShortandProperties,
  colorShorthandProperties,
} from "./sprinklesProperties"
import { lightThemeClass, darkThemeClass } from "./theme/theme.css"

const unresponsiveSprinklesProperties = defineProperties({
  properties: unresponsiveProps,
})

const responsiveSprinklesProperties = defineProperties({
  properties: responsiveProps,
  defaultCondition: `mobile`,
  conditions: {
    mobile: {},
    sm: {
      "@media": minMediaQuery(`sm`),
    },
    md: {
      "@media": minMediaQuery(`md`),
    },
    lg: {
      "@media": minMediaQuery(`lg`),
    },
    xl: {
      "@media": minMediaQuery(`xl`),
    },
    "2xl": {
      "@media": minMediaQuery(`2xl`),
    },
  },
  responsiveArray: breakpointsName,
  shorthands: responsiveShortandProperties,
})

const themeSelector = {
  light: `body${lightThemeClass} &`,
  dark: `body${darkThemeClass} &`,
}

const colorSprinklesProperties = defineProperties({
  conditions: {
    light: { selector: themeSelector.light },
    dark: { selector: themeSelector.dark },
  },
  defaultCondition: `light`,
  properties: colorProperties,
  shorthands: colorShorthandProperties,
})

export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveSprinklesProperties
)

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveSprinklesProperties,
  Value
>

export const sprinkles = createSprinkles(
  unresponsiveSprinklesProperties,
  responsiveSprinklesProperties,
  colorSprinklesProperties
)

export type Sprinkles = Parameters<typeof sprinkles>[number]
