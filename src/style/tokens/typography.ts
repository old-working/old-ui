export const letterSpacings = {
  0.5: `0.5px`,
  "-0.2": `-0.2px`,
  "-0.5": `-0.5px`,
  "-1": `-1px`,
  "-1.5": `-1.5px`,
  "-2": `-2px`,
  "-2.5": `-2.5px`,
}

export type LetterSpacing = keyof typeof letterSpacings

export const lineHeights = {
  15: `15px`,
  17: `17px`,
  20: `20px`,
  22: `22px`,
  29: `29px`,
  40: `40px`,
  59: `59px`,
  68: `68px`,
  78: `78px`,
  96: `96px`,
  144: `144px`,
}

export type LineHeight = keyof typeof lineHeights

export const fontSizes = {
  10: `10px`,
  12: `12px`,
  14: `14px`,
  16: `16px`,
  18: `18px`,
  24: `24px`,
  32: `32px`,
  48: `48px`,
  56: `56px`,
  64: `64px`,
  96: `96px`,
  120: `120px`,
}

export type FontSize = keyof typeof fontSizes

export const fontWeights = {
  400: `400`,
  500: `500`,
  700: `700`,
}

export type FontWeight = keyof typeof fontWeights
