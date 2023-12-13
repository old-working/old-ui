import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { IconButton } from "../IconButton"
import { Icon } from "../../media"

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "Components/IconButton`",
  component: IconButton,
} as Meta

export default meta

type Story = StoryObj<typeof meta>

export const SmallIconButton: Story = {
  render: () => (
    <IconButton size="sm">
      <Icon icon="closeOutline" size={16} />
    </IconButton>
  ),
}

export const MediumIconButton: Story = {
  render: () => (
    <IconButton size="md">
      <Icon icon="closeOutline" />
    </IconButton>
  ),
}
