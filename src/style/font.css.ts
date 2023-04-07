import { globalFontFace, style } from "@vanilla-extract/css"

const contentFont = `Montserrat`

globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400")`,
  fontWeight: 400,
  fontStyle: `regular`,
  fontDisplay: `swap`,
})
globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600")`,
  fontWeight: 400,
  fontStyle: `semibold`,
  fontDisplay: `swap`,
})
globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700")`,
  fontWeight: 400,
  fontStyle: `bold`,
  fontDisplay: `swap`,
})

export const MontserratFontStyle = style({
  fontFamily: `${contentFont}, sans-serif`,
})
