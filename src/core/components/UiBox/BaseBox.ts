import { createBoxWithAtomsProp } from "@dessert-box/react"
import { sprinkles, Sprinkles } from "../../../style/sprinkles.css"
import { HTMLProps, OverrideTokens } from "../.."

export interface BoxProps
  extends Omit<HTMLProps<"div">, keyof Sprinkles>,
    Sprinkles,
    OverrideTokens<Sprinkles> {}

/**
 * A Box is a primitive component that is used to build all other components.
 * It is a wrapper around a div element with a few extra features.
 * It is used to apply styles and props to a component without changing the underlying DOM node.
 * It is also used to apply responsive styles to a component.
 */
export const BaseBox = createBoxWithAtomsProp({
  atoms: sprinkles,
})
