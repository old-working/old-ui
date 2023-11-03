import { StoryObj, Meta } from "@storybook/react"
import { ResponsiveContainer } from "../Container"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/ResponsiveContainer",
  component: ResponsiveContainer,
  argTypes: {
    variant: {
      control: {
        type: `select`,
        options: [`spaced`, `fullwidth`],
      },
    },
  },
} satisfies Meta<typeof ResponsiveContainer>

export default meta

type Story = StoryObj<typeof meta>

export const FullWidthResponsiveContainer: Story = {
  args: {
    variant: `2xl-full`,
    height: 128,
  },
}

export const SpacedResponsiveContainer: Story = {
  args: {
    variant: `2xl`,
    height: 128,
  },
}
