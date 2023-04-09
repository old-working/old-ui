import { StoryObj, Meta } from "@storybook/react"
import { Body } from "../Body"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Typography/Body",
  component: Body,
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
    fontWeight: 500,
  },
} satisfies Meta<typeof Body>

export default meta

type Story = StoryObj<typeof Body>

export const BodyXs: Story = {
  args: {
    variant: `xs`,
  },
}

export const BodySm: Story = {
  args: {
    variant: `sm`,
  },
}

export const BodyMd: Story = {
  args: {
    variant: `md`,
  },
}

export const BodyLg: Story = {
  args: {
    variant: `lg`,
  },
}

export const BodyXl: Story = {
  args: {
    variant: `xl`,
  },
}
