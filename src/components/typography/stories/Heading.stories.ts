import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "../Heading"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Typography/Heading",
  component: Heading,
  argTypes: {
    fontWeight: {
      control: {
        type: `radio`,
        options: [400, 500, 700],
      },
    },
  },
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    fontWeight: 400,
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof Heading>

export const Heading7xl: Story = {
  args: {
    variant: `7xl`,
  },
}

export const Heading6xl: Story = {
  args: {
    variant: `6xl`,
  },
}

export const Heading5xl: Story = {
  args: {
    variant: `5xl`,
  },
}

export const Heading4xl: Story = {
  args: {
    variant: `4xl`,
  },
}

export const Heading3xl: Story = {
  args: {
    variant: `3xl`,
  },
}

export const Heading2xl: Story = {
  args: {
    variant: `2xl`,
  },
}
