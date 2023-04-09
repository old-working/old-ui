import { normalizeResponsiveValue, ResponsiveValue } from "../sprinkles.css"
import { BreakpointsName, breakpointsName } from "../tokens/breakpoints"

/**
 *
 * @param partial the input of a sprinkles prop
 * @param defaultBreakpointValue the default value to use if the first breakpoint input is null
 * @return non ti lascia vuoto l'array, ma ripete il valore del primo breakpoint
 * @example (partial :["column", null, null, "column-reverse"] ) => returns {
 *     "mobile": "column",
 *     "sm": "column",
 *     "md": "column",
 *     "lg": "column-reverse",
 *     "xl": "column-reverse",
 *     "2xl": "column-reverse"
 * }
 */
export const getFullyResponsiveValue = <T extends string | number>(
  partial: ResponsiveValue<T>,
  defaultBreakpointValue: T
): Record<BreakpointsName, T> => {
  const normalized = normalizeResponsiveValue(partial)
  return breakpointsName.reduce(
    (acc, breakpoint, currentIndex, brsArr) =>
      Object.assign(acc, {
        [breakpoint]:
          normalized[breakpoint] ??
          (currentIndex > 0
            ? acc[brsArr[currentIndex - 1]]
            : defaultBreakpointValue),
      }),
    {} as Record<BreakpointsName, T>
  )
}
