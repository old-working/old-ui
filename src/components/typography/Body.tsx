import React from "react"
import { Text, TextProps, TextVariant } from "./Text"
import { ResponsiveValue } from "../../style/sprinkles.css"
import { forwardRef } from "../../core"

export interface BodyProps
  extends Omit<TextProps, "variant" | "textTransforms"> {
  variant: "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
}

const VARIANTS = {
  xxl: [`xl`, `xl`, `xxl`, `xxl`, `xxl`, `xxl`],
  xl: [`lg`, `lg`, `lg`, `xl`, `xl`, `xl`],
  lg: [`xs`, `xs`, `sm`, `sm`, `lg`, `lg`],
  md: `md`,
  sm: [`xs`, `xs`, `sm`, `sm`, `sm`, `sm`],
  xs: `xs`,
  xxs: `xxs`,
} satisfies Record<string, ResponsiveValue<TextVariant>>

export const Body = forwardRef<BodyProps, "div">(
  ({ variant, ...rest }, ref) => (
    <Text ref={ref} variant={VARIANTS[variant]} {...rest} />
  )
)
