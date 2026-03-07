import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactRefresh from "eslint-plugin-react-refresh";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    plugins: {
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // "prefer-const": "warn",
      // make these stylistic checks warnings rather than errors
      //"no-unused-vars": "warn",
      //"prefer-const": "warn",
    },
  },
];
