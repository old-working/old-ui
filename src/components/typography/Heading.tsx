import React from "react"
import { Text, TextProps, TextVariant } from "./Text"
import { ResponsiveValue } from "../../style/sprinkles.css"
import { forwardRef } from "../../core"

export interface HeadingProps
  extends Omit<TextProps, "variant" | "textTransforms"> {
  variant: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
}

const VARIANTS = {
  "7xl": [`3xl`, `3xl`, `4xl`, `5xl`, `7xl`, `7xl`],
  "6xl": `6xl`,
  "5xl": [`2xl`, `2xl`, `3xl`, `4xl`, `5xl`, `5xl`],
  "4xl": [`2xl`, `2xl`, `3xl`, `3xl`, `4xl`, `4xl`],
  "3xl": [`xl`, `xl`, `2xl`, `2xl`, `3xl`, `3xl`],
  "2xl": [`lg`, `lg`, `xl`, `xl`, `2xl`, `2xl`],
} satisfies Record<string, ResponsiveValue<TextVariant>>

export const Heading = forwardRef<HeadingProps, "div">(
  ({ variant, ...rest }, ref) => (
    <Text ref={ref} variant={VARIANTS[variant]} {...rest} />
  )
)
