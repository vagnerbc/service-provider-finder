import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "playwright-report/",
      "test-results/",
      "*.min.js"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["apps/web/src/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks
    },
    rules: {
      ...reactHooks.configs.recommended.rules
    }
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "tests/e2e/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);
