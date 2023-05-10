import { style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

export const baseContainerStyle = style({
  margin: 0,
  padding: 0,
  boxSizing: `border-box`,
  marginLeft: `auto`,
  marginRight: `auto`,
  border: `1px solid red`,
})

const fullWidth = style({
  width: `100%`,
  maxWidth: `100%`,
})

const xxl = style({
  maxWidth: `1680px`,
  width: `calc(100% - 48px)`,
})

const xl = style({
  maxWidth: `1280px`,
  width: `calc(100% - 48px)`,
})

const lg = style({
  maxWidth: `1024px`,
  width: `calc(100% - 36px)`,
})

const md = style({
  maxWidth: `768px`,
  width: `calc(100% - 24px)`,
})

const sm = style({
  maxWidth: `375px`,
  width: `calc(100% - 12px)`,
})

const mobile = style({
  maxWidth: `100%`,
  width: `calc(100% - 12px)`,
})

export const container = recipe({
  base: baseContainerStyle,
  variants: {
    variant: {
      fullWidth,
      "2xl": xxl,
      xl,
      lg,
      md,
      sm,
      mobile,
    },
  },
  defaultVariants: {
    variant: `2xl`,
  },
})

export type ContainerVariants = RecipeVariants<typeof container>
