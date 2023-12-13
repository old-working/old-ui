import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Box, Stack } from "../../../layout"
import { Body } from "../../../typography"
import { Icon, IconType } from "../Icon"
import { outlinesIcons } from "../icons"

const IconContainer = ({ icon }: { icon: IconType }) => (
  <Box
    __minWidth="120px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    m={4}
    p={8}
    borderRadius={4}
  >
    <Icon icon={icon} size={24} />
    <Body variant="md">{icon}</Body>
  </Box>
)

const IconList = ({ icons, title }: { icons: IconType[]; title: string }) => (
  <Stack direction="column" spacing={12}>
    <Body variant="lg">{title}</Body>
    <Box display="flex" flexWrap="wrap">
      {icons.map((icon) => (
        <IconContainer key={icon} icon={icon as IconType} />
      ))}
    </Box>
  </Stack>
)

const Page = () => (
  <Stack direction="column" spacing={32}>
    <IconList
      icons={Object.keys(outlinesIcons) as IconType[]}
      title="Finance & Commerce"
    />
  </Stack>
)

const meta = {
  // eslint-disable-next-line @typescript-eslint/quotes
  title: "components/media/Icon",
  component: Page,
  parameters: {
    layout: `fullscreen`,
  },
} satisfies Meta<typeof Icon>
export default meta

type Story = StoryObj<typeof meta>
export const All: Story = {}
