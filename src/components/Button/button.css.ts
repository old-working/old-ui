import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "../../style/sprinkles.css"

const base = sprinkles({
  borderRadius: 32,
})

const primary = sprinkles({
  background: `primary`,
  color: `background`,
  borderColor: `primary`,
})

const secondary = sprinkles({
  background: `buttonSecondary`,
  borderColor: `primary`,
})

export const button = recipe({
  base,
  variants: {
    color: {
      primary,
      secondary,
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
  },
  defaultVariants: {
    color: `primary`,
    size: `medium`,
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
