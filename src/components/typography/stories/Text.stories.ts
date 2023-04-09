import { Meta, StoryObj } from "@storybook/react"
import { Text } from "../Text"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Typography/Text",
  component: Text,
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
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof Text>

export const TextWithArray: Story = {
  args: {
    variant: [`2xl`, `sm`, `5xl`],
  },
}

export const TextWithObject: Story = {
  args: {
    variant: {
      mobile: `xxs`,
      sm: `4xl`,
      md: `2xl`,
    },
    color: `primary`,
  },
}
