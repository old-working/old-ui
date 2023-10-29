// Adapted from https://github.com/chakra-ui/chakra-ui/
// MIT License - Copyright (c) 2019 Segun Adebayo

export const pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  hover: `&:hover, &[data-hover]`,
  /**
   * Styles for CSS Selector `&:active`
   */
  active: `&:active, &[data-active]`,
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  focus: `&:focus, &[data-focus]`,
  /**
   * Styles to apply when this element is disabled.
   * The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  disabled: `&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]`,
  /**
   * Styles for CSS Selector `&:readonly`
   */
  readOnly: `&[aria-readonly=true], &[readonly], &[data-readonly]`,
  /**
   * Styles for CSS selector `&::before`
   */
  before: `&::before`,
  /**
   * Styles for CSS selector `&::after`
   */
  after: `&::after`,
  /**
   * Styles for CSS selector `&:empty`
   */
  empty: `&:empty`,
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  expanded: `&[aria-expanded=true], &[data-expanded]`,
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  checked: `&[aria-checked=true], &[data-checked]`,
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  invalid: `&[aria-invalid=true], &[data-invalid]`,
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  valid: `&[data-valid], &[data-state=valid]`,
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  loading: `&[data-loading], &[aria-busy=true]`,
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  selected: `&[aria-selected=true], &[data-selected]`,
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  hidden: `&[hidden], &[data-hidden]`,
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  autofill: `&:-webkit-autofill`,
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  even: `&:nth-of-type(even)`,
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  odd: `&:nth-of-type(odd)`,
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  first: `&:first-of-type`,
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  groupHover: `[role=group]:hover &, [role=group][data-hover] &, [data-group]:hover &, [data-group][data-hover] &, .group:hover &, .group[data-hover] &`,
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  placeholder: `&::placeholder`,
}

export type Pseudos = typeof pseudoSelectors
