# Jared Makes

A fork of Super solstice, a meticulously crafted theme for astro using Tailwind that is SEO friendly.

<https://super-solstice.vercel.app/>

# 🤖 Tech stack

Main Framework - Astro
Type Checking - TypeScript
JS framework - Vanilla JS
Styling - TailwindCSS

# Notes 📝

## Config for prod

For the sitemap to work, define your URL in `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ...
  site: "https://stargazers.club",
  integrations: [sitemap()],
});
```
