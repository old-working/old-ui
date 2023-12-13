import { Meta, StoryObj } from "@storybook/react"
import { Icon } from "../Icon"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "components/Media/Icon",
  component: Icon,

  parameters: {
    layout: `fullscreen`,
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    icon: `arrowRightOutline`,
  },
}
