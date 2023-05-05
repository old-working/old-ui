import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { IconButton } from "../IconButton"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/IconButton`",
  component: IconButton,
} as Meta

export default meta

type Story = StoryObj<typeof meta>

export const SmallIconButton: Story = {
  render: () => <IconButton size="sm">😏</IconButton>,
}

export const MediumIconButton: Story = {
  render: () => <IconButton size="md">😏</IconButton>,
}
