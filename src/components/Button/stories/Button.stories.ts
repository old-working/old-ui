import { StoryObj } from "@storybook/react"

import { Button } from "../Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: `select`,
        options: [`small`, `medium`, `large`],
      },
    },
    color: {
      control: {
        type: `none`,
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    color: `primary`,
    size: `medium`,
  },
}

export const Secondary: Story = {
  args: {
    color: `secondary`,
    size: `medium`,
  },
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
