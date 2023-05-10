import { StoryObj, Meta } from "@storybook/react"
import { Container } from "../Container"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Container",
  component: Container,
  argTypes: {
    variant: {
      control: {
        type: `select`,
        options: [`mobile`, `sm`, `md`, `lg`, `xl`, `2xl`],
      },
    },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Container2xl: Story = {
  args: {
    variant: `2xl`,
    height: 128,
  },
}

export const ContainerSM: Story = {
  args: {
    variant: `sm`,
    height: 128,
  },
}
