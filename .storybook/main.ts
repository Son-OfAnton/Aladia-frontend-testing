import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public", "../assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     assetsInclude: ["/sb-preview/runtime.js"], 
  //   });
  // },
};
export default config;
