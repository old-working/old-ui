import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../style/sprinkles.css"

export const test = sprinkles({
  display: `flex`,
  px: 12,
  py: 8,
  background: `primary`,
  color: `background`,
})

export const primaryButton = style([
  {
    color: `white`,
  },
  test,
])
