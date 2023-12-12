import { vars } from "./theme/contract.css"
import { overflows } from "./tokens/overflows"
import { zIndixes } from "./tokens/zIndexes"

export const unresponsiveProps = {
  position: [`absolute`, `fixed`, `relative`, `static`, `sticky`] as const,
  opacity: [0, 0.25, 0.5, 0.75, 1] as const,
  zIndex: zIndixes,
  fontWeight: vars.fontWeights,
  border: [`none`],
  gap: vars.space,
  borderRadius: vars.borderRadius,
  textAlign: [`left`, `center`, `right`] as const,
  boxShadow: vars.shadows,
} as const

export type UnresponsiveProp = keyof typeof unresponsiveProps

export const responsiveProps = {
  display: [
    `block`,
    `inline`,
    `inline-block`,
    `flex`,
    `inline-flex`,
    `none`,
  ] as const,
  fontSize: vars.fontSizes,
  lineHeight: vars.lineHeights,
  letterSpacing: vars.letterSpacings,
  marginBottom: vars.space,
  marginLeft: vars.space,
  marginRight: vars.space,
  marginTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  paddingTop: vars.space,
  flexDirection: [`row`, `column`, `row-reverse`, `column-reverse`] as const,
  flexWrap: [`nowrap`, `wrap`, `wrap-reverse`] as const,
  overflow: overflows,
  overflowX: overflows,
  overflowY: overflows,
  alignItems: [
    `flex-start`,
    `flex-end`,
    `center`,
    `baseline`,
    `stretch`,
  ] as const,
  justifyContent: [
    `flex-start`,
    `flex-end`,
    `center`,
    `space-between`,
    `space-around`,
    `space-evenly`,
    `start`,
    `end`,
    `left`,
    `right`,
  ] as const,
  height: vars.space,
  width: { ...vars.space, ...vars.container },
  minWidth: { ...vars.space, ...vars.container },
  maxWidth: { ...vars.space, ...vars.container },
  maxHeight: { ...vars.space, ...vars.container },
  minHeight: { ...vars.space, ...vars.container },
  columnGap: vars.space,
  rowGap: vars.space,
}

export type ResponsiveProp = keyof typeof responsiveProps

export const colorProperties = {
  backgroundColor: vars.colors,
  background: vars.colors,
  borderColor: vars.colors,
  color: vars.colors,
}

export type ColorProperty = keyof typeof colorProperties

export const colorShorthandProperties = {
  bg: [`backgroundColor`, `background`],
} satisfies Record<string, ColorProperty[]>

export type ColorShorthandProperty = keyof typeof colorShorthandProperties

export const responsiveShortandProperties = {
  m: [`marginBottom`, `marginLeft`, `marginRight`, `marginTop`],
  mx: [`marginLeft`, `marginRight`],
  my: [`marginBottom`, `marginTop`],
  mb: [`marginBottom`],
  ml: [`marginLeft`],
  mr: [`marginRight`],
  mt: [`marginTop`],
  p: [`paddingBottom`, `paddingLeft`, `paddingRight`, `paddingTop`],
  px: [`paddingLeft`, `paddingRight`],
  py: [`paddingBottom`, `paddingTop`],
  pb: [`paddingBottom`],
  pl: [`paddingLeft`],
  pr: [`paddingRight`],
  pt: [`paddingTop`],
} satisfies Record<string, ResponsiveProp[]>

export type ResponsiveShorthandProperty =
  keyof typeof responsiveShortandProperties
