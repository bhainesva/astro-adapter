import { defineConfig } from 'astro/config';
import yext from "./adapter/index";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: yext()
});