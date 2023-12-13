import { style } from "@vanilla-extract/css"
import { darkThemeClass, lightThemeClass, colorPalette } from "../../style"

const hoverCondition = `:is(:hover, :focus, :active)`

export const purple = style({
  background: colorPalette.purple200,
  color: `white`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.purple300,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.purple500,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.purple600,
    },
  },
})

export const yellow = style({
  background: colorPalette.yellow50,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.yellow20,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.yellow400,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.yellow600,
    },
  },
})

export const blue = style({
  background: colorPalette.blue50,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.blue20,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.blue500,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.blue600,
    },
  },
})

export const green = style({
  background: colorPalette.green50,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.green20,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.green500,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.green600,
    },
  },
})

export const orange = style({
  background: colorPalette.orange50,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.orange20,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.orange400,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.orange600,
    },
  },
})

export const red = style({
  background: colorPalette.red50,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.red20,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.red500,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.red600,
    },
  },
})

export const theme = style({
  background: colorPalette.white,
  color: `black`,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.grey10,
    },
    [`${darkThemeClass} &`]: {
      background: colorPalette.grey700,
      color: `white`,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      background: colorPalette.grey600,
    },
  },
})

export const disabled = style({
  background: colorPalette.grey20,
  color: colorPalette.grey200,
  cursor: `not-allowed`,
  selectors: {
    [`${darkThemeClass} &`]: {
      background: colorPalette.grey600,
      color: colorPalette.grey300,
    },
  },
})

export const ghost = style({
  background: `transparent`,
  color: colorPalette.grey300,
  selectors: {
    [`${lightThemeClass} &${hoverCondition}`]: {
      background: colorPalette.grey10,
    },
    [`${darkThemeClass} &${hoverCondition}`]: {
      color: colorPalette.grey300,
      background: colorPalette.grey500,
    },
  },
})
