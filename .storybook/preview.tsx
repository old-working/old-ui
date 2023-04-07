import { Preview } from "@storybook/react"
import React from "react"
import { ThemeProvider } from "../src/components/Provider/ThemeProvider"

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
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
