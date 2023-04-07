import React from "react"
import { StoryObj } from "@storybook/react"
import { Box } from "./Box"

const BoxComponent = () => (
  <Box p={16} bg="labelYellow">
    <h1>Box</h1>
  </Box>
)

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/Box",
  component: BoxComponent,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
