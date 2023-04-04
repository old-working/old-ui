import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import tsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      plugins: [vanillaExtractPlugin(), tsconfigPaths()],
    }),
  docs: {
    autodocs: "tag",
  },
}

export default config
