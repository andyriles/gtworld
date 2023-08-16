import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "apple-touch-icon.png",
    "masked-icon.svg",
    "gtb_logo.png",
  ],
  manifest: {
    name: "GTWorld",
    shortName: "GTWorld",
    description: "An app that can allow you to deposit cheques",
    icons: [
      {
        src: "/gtb_logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/gtb_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/gtb_logo.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/gtb_logo.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },

  themeColor: "#171737",
  backgroundColor: "#fefebf2",
  display: "standalone",
  scope: "/",
  start_url: "/",
  orientation: "portrait",
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
