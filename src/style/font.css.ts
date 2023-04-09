import { globalFontFace, style } from "@vanilla-extract/css"

const contentFont = `Montserrat`

globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap")`,
  fontWeight: 400,
  fontStyle: `regular`,
  fontDisplay: `swap`,
})
globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap")`,
  fontWeight: 500,
  fontStyle: `medium`,
  fontDisplay: `swap`,
})
globalFontFace(contentFont, {
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap")`,
  fontWeight: 700,
  fontStyle: `bold`,
  fontDisplay: `swap`,
})

export const MontserratFontStyle = style({
  fontFamily: `${contentFont}, sans-serif`,
})
