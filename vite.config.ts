import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src"],
      outDir: "dist",
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@elements": path.resolve(__dirname, "./src/ui/elements"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DFScriptNotebook",
      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.js"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "df-script",
        "@mui/material",
        "@mui/icons-material",
        "@mui/x-data-grid",
        "@emotion/react",
        "@emotion/styled",
        "@monaco-editor/react",
        "marked",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "df-script": "dfScript",
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
});
