import type { Preview } from "@storybook/vue3";
import "../assets/css/tailwind.css";
// @fortawesome/fontawesome-pro/css/all.css
import "@fortawesome/fontawesome-svg-core/styles.css";
import * as icon from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/vue-fontawesome";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
