import { StoryObj, Meta } from "@storybook/react"
import React from "react"
import { responsiveProps } from "../../../style/sprinklesProperties"
import { vars } from "../../../style/theme/contract.css"
import { Stack } from "./Stack"

const El = () => <div>El</div>
const elArray = Array.from({ length: 5 }, (_, i) => <El key={i} />)

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    direction: {
      options: responsiveProps.flexDirection,
      control: { type: `inline-radio` },
    },
    align: {
      options: responsiveProps.alignItems,
      control: { type: `inline-radio` },
    },
    justify: {
      options: responsiveProps.justifyContent,
      control: { type: `inline-radio` },
    },
    spacing: {
      options: Object.keys(vars.space).map((s) => (Number.isNaN(+s) ? s : +s)),
      control: { type: `inline-radio` },
    },
    sprinkles: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: elArray,
  },
} satisfies Meta<typeof Stack>

type Story = StoryObj<typeof meta>

export default meta

export const HStack: Story = {
  render: (args) => <Stack direction="row" {...args} />,
}

export const VStack: Story = {
  render: (args) => <Stack {...args} direction="column" />,
}
