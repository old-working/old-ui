import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "../Button"
import { Box } from "../../layout"
import { ColorSchemeVariants } from "../button.css"
import { Icon } from "../../media"

const ButtonsList = (colorScheme: ColorSchemeVariants) => (
  <Box display="flex" gap={12} alignItems="center" flexWrap={`wrap`}>
    {[`lg`, `md`, `sm`, `xs`].map((size) => (
      <Button
        key={size}
        variant={`solid`}
        colorScheme={colorScheme}
        size={size as `xs` | `sm` | `md` | `lg`}
      >
        Call to action
      </Button>
    ))}
    <Button variant={`solid`} colorScheme={colorScheme} isFullWidth>
      Grosso
    </Button>
  </Box>
)

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Button",
  component: ButtonsList,
  argTypes: {
    variant: {
      control: {
        type: `select`,
        options: [`solid`],
      },
    },
    colorScheme: {
      control: {
        type: `select`,
        options: [
          `purple`,
          `yellow`,
          `blue`,
          `green`,
          `red`,
          `orange`,
          `theme`,
          `disabled`,
          `ghost`,
        ],
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>
export const Purple: Story = {
  render: () => ButtonsList(`purple`),
}

export const Yellow: Story = {
  render: () => ButtonsList(`yellow`),
}
export const Blue: Story = {
  render: () => ButtonsList(`blue`),
}

export const Green: Story = {
  render: () => ButtonsList(`green`),
}

export const Red: Story = {
  render: () => ButtonsList(`red`),
}

export const Orange: Story = {
  render: () => ButtonsList(`orange`),
}

export const Disabled: Story = {
  render: () => ButtonsList(`disabled`),
}

export const Ghost: Story = {
  render: () => ButtonsList(`ghost`),
}
export const Theme: Story = {
  render: () => ButtonsList(`theme`),
}

export const WithLeftIcon: Story = {
  render: () => (
    <Button leftIcon={<Icon icon="arrowLeftOutline" size={16} />}>
      Call to action
    </Button>
  ),
}

export const WithRightIcon: Story = {
  render: () => (
    <Button rightIcon={<Icon icon="arrowRightOutline" size={16} />}>
      Call to action
    </Button>
  ),
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
