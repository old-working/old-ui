export const breakpointsName = [
  `mobile`,
  `sm`,
  `md`,
  `lg`,
  `xl`,
  `2xl`,
] as const

export type BreakpointsName = (typeof breakpointsName)[number]

export const breakpoints = {
  mobile: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1680,
} satisfies Record<BreakpointsName, number>

export const minMediaQuery = (breakpoint: Exclude<BreakpointsName, "mobile">) =>
  `screen and (min-width: ${breakpoints[breakpoint]}px)`
