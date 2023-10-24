import { defineConfig } from 'astro/config';
import yext from "./adapter/index";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: yext(),
  integrations: [tailwind()]
});