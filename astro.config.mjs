import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import auth from "auth-astro";

export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone"
  }),

  security: {
    allowedDomains: [
      {
        protocol: "https",
        hostname: "clients.bambou-franceschini.fr"
      }
    ]
  },

  integrations: [auth()]
});