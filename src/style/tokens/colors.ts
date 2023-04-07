export const test = {}
const colorPalette = {
  white: `#ffffff`,
  black: `#000000`,
  grey700: `#131312`,
  grey600: `#252525`,
  grey500: `#2f2f2f`,
  grey400: `#444444`,
  grey300: `#5a5a5a`,
  grey200: `#7c7c7c`,
  grey100: `#bcbcbc`,
  grey50: `#e0e0e0`,
  grey20: `#ededed`,
  grey10: `#fafafa`,
  blue600: `#002032`,
  blue500: `#234870`,
  blue400: `#104f8a`,
  blue300: `#1865ae`,
  blue200: `#408bbf`,
  blue100: `#8ebce5`,
  blue50: `#a9cfef`,
  blue20: `#c5e1f9`,
  blue10: `#e0f3fe`,
  green600: `#002a17`,
  green500: `#06d154`,
  green400: `#10a451`,
  green300: `#3cc974`,
  green200: `#65E197`,
  green100: `#82e8ab`,
  green50: `#a2eec1`,
  green20: `#c1f4d7`,
  green10: `#e0faee`,
  red10: `#FFEDEB`,
  red20: `#FFE1DD`,
  red50: `#FFB4AA`,
  red100: `#FF9688`,
  red200: `#FF6955`,
  red300: `#EB614E`,
  red400: `#BF4F40`,
  red500: `#732F26`,
  red600: `#331511`,
  orange600: `#331E06`,
  orange500: `#682b05`,
  orange400: `#a54606`,
  orange300: `#eb791c`,
  orange200: `#ee9143`,
  orange100: `#f2a96b`,
  orange50: `#f6c193`,
  orange20: `#f9d9bc`,
  orange10: `#fdf1e2`,
  yellow600: `#332f10`,
  yellow500: `#653d12`,
  yellow400: `#a87800`,
  yellow300: `#eb791c`,
  yellow200: `#ffd22a`,
  yellow100: `#ffdc53`,
  yellow50: `#ffe67d`,
  yellow20: `#fff0a6`,
  yellow10: `#fff9ce`,
}

export const nullColors = {
  background: ``,
  backgroundSecondary: ``,

  primary: ``,
  buttonSecondary: ``,
  buttonSecondaryHover: ``,
  buttonTertiaryHover: ``,
  buttonDisabled: ``,

  modalBackground: ``,
  modalOverlay: ``,

  textPrimary: ``,
  textSecondary: ``,
  textDisabled: ``,

  border: ``,
  hover: ``,

  labelBlue: ``,
  labelGreen: ``,
  labelYellow: ``,
  labelOrange: ``,
  labelRed: ``,
}

export const lightThemeColors = {
  background: colorPalette.white,
  backgroundSecondary: colorPalette.grey10,
  primary: colorPalette.blue400,
  buttonSecondary: colorPalette.yellow50,
  buttonSecondaryHover: colorPalette.yellow100,
  buttonTertiaryHover: colorPalette.yellow100,
  buttonDisabled: colorPalette.grey10,

  modalBackground: colorPalette.white,
  modalOverlay: `rgba(0, 0, 0, 0.6)`,

  textPrimary: colorPalette.black,
  textSecondary: colorPalette.grey300,
  textDisabled: colorPalette.grey100,

  border: colorPalette.grey50,
  hover: colorPalette.grey20,

  labelBlue: colorPalette.blue10,
  labelGreen: colorPalette.green10,
  labelYellow: colorPalette.yellow10,
  labelOrange: colorPalette.orange10,
  labelRed: colorPalette.red10,
} satisfies typeof nullColors

export const darkThemeColors = {
  background: colorPalette.blue600,
  backgroundSecondary: colorPalette.blue500,
  primary: colorPalette.yellow50,

  buttonSecondary: colorPalette.blue300,
  buttonSecondaryHover: colorPalette.blue400,
  buttonTertiaryHover: colorPalette.blue200,
  buttonDisabled: colorPalette.blue500,

  modalBackground: colorPalette.blue600,
  modalOverlay: `rgba(0, 0, 0, 0.8)`,

  textPrimary: colorPalette.white,
  textSecondary: colorPalette.grey200,
  textDisabled: colorPalette.grey300,

  border: colorPalette.blue500,
  hover: colorPalette.blue400,

  labelBlue: colorPalette.blue500,
  labelGreen: colorPalette.green500,
  labelYellow: colorPalette.yellow500,
  labelOrange: colorPalette.orange500,
  labelRed: colorPalette.red500,
} satisfies typeof nullColors

export type Color = keyof typeof nullColors | keyof typeof colorPalette
