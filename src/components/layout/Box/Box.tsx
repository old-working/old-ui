import { createBox } from "@dessert-box/react"
import { sprinkles, Sprinkles } from "../../../style/sprinkles.css"
import { resetBox } from "./box.css"
import { HTMLProps, OverrideTokens } from "../../../core"

export interface BoxProps
  extends Omit<HTMLProps<"div">, keyof Sprinkles>,
    Sprinkles,
    OverrideTokens<Sprinkles> {}

export const Box = createBox({
  atoms: sprinkles,
  defaultClassName: resetBox,
})
