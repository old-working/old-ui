import React from "react"
import { HTMLPropsWithoutAs } from "../../../core"
import { ResponsiveValue, Sprinkles } from "../../../style/sprinkles.css"
import { Space } from "../../../style/tokens/space"
import { getFullyResponsiveValue } from "../../../style/utils/getFullyResponse"
import { breakpointsName } from "../../../style/tokens/breakpoints"
import { Box } from "../Box"

const DEAFULT_DIRECTION = `row`

type StackOptions = {
  spacing?: ResponsiveValue<Space>
  direction?: Sprinkles["flexDirection"]
  align?: Sprinkles["alignItems"]
  justify?: Sprinkles["justifyContent"]
}

export interface StackProps extends StackOptions, HTMLPropsWithoutAs<"div"> {}

const useSpacingProps = ({
  spacing = 0,
  direction = DEAFULT_DIRECTION,
}: Pick<StackOptions, "spacing" | "direction">) =>
  React.useMemo(() => {
    const directionBreakpoints = getFullyResponsiveValue(
      direction,
      DEAFULT_DIRECTION
    )

    const spacingBreakpoints = getFullyResponsiveValue(spacing, 0)

    return breakpointsName.reduce(
      (acc, breakpoint) => {
        const directionValue = directionBreakpoints[breakpoint]
        const spacingValue = spacingBreakpoints[breakpoint]

        const isRow = directionValue.includes(`row`)

        return {
          columnGap: Object.assign(acc.columnGap, {
            [breakpoint]: isRow ? spacingValue : 0,
          }),
          rowGap: Object.assign(acc.rowGap, {
            [breakpoint]: isRow ? 0 : spacingValue,
          }),
        }
      },
      {
        columnGap: {},
        rowGap: {},
      }
    )
  }, [spacing, direction])

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      spacing,
      direction,
      align = `flex-start`,
      justify = `flex-start`,
      sprinkles,
      ...rest
    },
    ref
  ) => {
    const { columnGap, rowGap } = useSpacingProps({ spacing, direction })
    const { color, ...other } = sprinkles || {}

    return (
      <Box
        ref={ref}
        {...rest}
        {...other}
        display="flex"
        color={color as any}
        alignItems={align}
        justifyContent={justify}
        flexDirection={direction}
        columnGap={columnGap}
        rowGap={rowGap}
      >
        {children}
      </Box>
    )
  }
)

/**
 * HStack builds on top of base Stack component to explicitly set the
 * horizontal direction to Stack element in an easier to detect way in JSX.
 * @component
 * @example
 * return (
 *   <HStack align="center" justify="space-between">
 *     <Box>1</Box>
 *     <Box>2</Box>
 *  </HStack>
 * )
 */
export const HStack = React.forwardRef<
  HTMLDivElement,
  Omit<StackProps, "direction">
>((props, ref) => <Stack align="center" {...props} direction="row" ref={ref} />)

/**
 * VStack builds on top of base Stack component to explicitly set the
 * vertical direction to Stack element in an easier to detect way in JSX.
 * @component
 * @example
 * return (
 *   <VStack align="center" justify="space-between">
 *     <Box>1</Box>
 *     <Box>2</Box>
 *  </VStack>
 * )
 */
export const VStack = React.forwardRef<
  HTMLDivElement,
  Omit<StackProps, "direction">
>((props, ref) => (
  <Stack align="center" {...props} direction="column" ref={ref} />
))
