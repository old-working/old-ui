export const overflows = [
  `hidden`,
  `scroll`,
  `auto`,
  `visible`,
  `clip`,
] as const

export type Overflow = (typeof overflows)[number]
