import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactDom from "react-dom";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [react, reactDom],
    },
  },
});
