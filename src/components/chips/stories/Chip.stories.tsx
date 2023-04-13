import { StoryObj, Meta } from "@storybook/react"
import React from "react"
import { Chip } from "../Chip"
import { Box } from "../../layout"
import { CHIP_VARIANTS, ChipVariant, ChipSize } from "../constant"
import { ResponsiveValue } from "../../../style/sprinkles.css"

const ChipKeys = Object.keys(CHIP_VARIANTS) as ChipVariant[]

const ChipSection = (size: ResponsiveValue<ChipSize>) => (
  <Box
    display="flex"
    gap={8}
    alignItems="baseline"
    width="full"
    flexWrap="wrap"
  >
    {ChipKeys.map((key) => (
      <Chip size={size} variant={key}>
        Testo di prova
      </Chip>
    ))}
  </Box>
)

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Chip",
  component: ChipSection,
  arg: {
    size: [`small`, `medium`],
  },
} as Meta

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  render: () => ChipSection(`small`),
}

export const Medium: Story = {
  render: () => ChipSection(`medium`),
}

export const SmallAndMedium: Story = {
  render: () => ChipSection([`small`, `medium`]),
}
