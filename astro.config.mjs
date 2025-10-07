import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://drpedropaulo.fst.br',
  integrations: [tailwind()],
  output: 'static'
});