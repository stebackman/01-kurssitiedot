// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/01-kurssitiedot/", // Replace 'repo-name' with your GitHub repo name
});
