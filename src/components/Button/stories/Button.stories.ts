import { StoryObj, Meta } from "@storybook/react"

import { Button } from "../Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    primary: true,
    label: `Button`,
  },
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
