import React from "react"
import clsx from "clsx"
import { DESIGN_TEXT_ELEMENTS } from "./constants"
import { ResponsiveValue } from "../../style/sprinkles.css"
import { FontWeight } from "../../style/tokens/typography"
import {
  colorTextPrimary,
  textDecorationUnderline,
  textTransformUppercase,
} from "./text.css"
import { getFullyResponsiveValue } from "../../style/utils/getFullyResponse"
import { forwardRef, HTMLProps } from "../../core"
import { Box } from "../layout"

export type TextVariant = keyof typeof DESIGN_TEXT_ELEMENTS

interface TextOptions {
  variant: ResponsiveValue<TextVariant>
  fontWeight?: FontWeight
  textTransforms?: Array<"uppercase" | "underline">
}

export interface TextProps
  extends Omit<HTMLProps<"div">, "color">,
    TextOptions {}

export const Text = forwardRef<TextProps, "div">(
  (
    {
      className = ``,
      variant,
      textTransforms = [],
      fontWeight = 400,
      sprinkles: sprinklesProp,
      ...rest
    },
    ref
  ) => {
    /**
     * This is a bit of a hack to get the atoms to work properly.
     * We need to get the fully responsive value for the variant and then convert it to the atoms that we need.
     * We can't just use the variant directly because the atoms don't support responsive values.
     * We also can't use the `sprinkles` prop because it doesn't support responsive values.
     * So we have to do this to get the atoms to work properly.
     */
    const responsiveTextObj = getFullyResponsiveValue(variant, `7xl`)
    const atoms = React.useMemo(
      () =>
        Object.entries(responsiveTextObj).reduce(
          (acc, [breakpoint, rule]) => ({
            fontSize: {
              ...acc.fontSize,
              [breakpoint]: DESIGN_TEXT_ELEMENTS[rule].fontSize,
            },
            lineHeight: {
              ...acc.lineHeight,
              [breakpoint]: DESIGN_TEXT_ELEMENTS[rule].lineHeight,
            },
            letterSpacing: {
              ...acc.letterSpacing,
              [breakpoint]: DESIGN_TEXT_ELEMENTS[rule].letterSpacing,
            },
          }),
          {
            fontSize: {},
            lineHeight: {},
            letterSpacing: {},
          }
        ),
      [responsiveTextObj]
    )

    return (
      <Box
        className={clsx(
          className,
          colorTextPrimary,
          textTransforms.includes(`underline`) && textDecorationUnderline,
          textTransforms.includes(`uppercase`) && textTransformUppercase
        )}
        ref={ref}
        {...atoms}
        {...rest}
        {...sprinklesProp}
        fontWeight={fontWeight}
      />
    )
  }
)
