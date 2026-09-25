import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  banner: {
    js: `"use client";`,
  },
  external: ["react", "react-dom", /^@mui\//, /^@emotion\//],
  onSuccess: "cp src/types/mui-augmentation.d.ts dist/",
});
