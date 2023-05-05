import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button"
import { Box } from "../../layout"

const ButtonsList = (
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "disabled"
    | "ghost"
) => (
  <Box display="flex" gap={12} alignItems="center" flexWrap={`wrap`}>
    {[`lg`, `md`, `sm`, `xs`].map((size) => (
      <Button
        key={size}
        variant={variant}
        size={size as `xs` | `sm` | `md` | `lg`}
      >
        Call to action
      </Button>
    ))}
    <Button variant={variant} isFullWidth>
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
        options: [`primary`, `secondary`],
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  render: () => ButtonsList(`primary`),
}

export const Secondary: Story = {
  render: () => ButtonsList(`secondary`),
}
export const Tertiary: Story = {
  render: () => ButtonsList(`tertiary`),
}

export const Outline: Story = {
  render: () => ButtonsList(`outline`),
}

export const Disabled: Story = {
  render: () => ButtonsList(`disabled`),
}

export const Ghost: Story = {
  render: () => ButtonsList(`ghost`),
}

export const WithLeftIcon: Story = {
  render: () => <Button leftIcon={<span>👈</span>}>Call to action</Button>,
}

export const WithRightIcon: Story = {
  render: () => <Button rightIcon={<span>👉</span>}>Call to action</Button>,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
