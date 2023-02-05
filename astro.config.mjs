import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "astro-sitemap";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://jaredmakes.com",
  integrations: [tailwind(), prefetch({
    throttle: 3
  }), mdx(), robotsTxt(), sitemap()],
  output: "server",
  adapter: cloudflare()
});