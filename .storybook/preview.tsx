import { Preview } from "@storybook/react"
import React from "react"
import { ThemeProvider } from "../src/components/Provider/ThemeProvider"

const parameters = {
   backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "dark",
        value: "#000",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
}

const preview: Preview = {
  parameters,
  decorators: [
    (Story) => (
      <ThemeProvider options={{ shouldApplyFontFamily: true }}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
