import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import sanity from "astro-sanity";
import netlify from '@astrojs/netlify';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap(), sanity({
    projectId: 'uzrqwbe7',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  })],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where",
  output: 'server',
  adapter: netlify()
});