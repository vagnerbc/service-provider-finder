import { defineConfig, devices } from "@playwright/test";

const webBaseUrl = process.env.WEB_BASE_URL ?? "http://localhost:5173";
const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:3333";

export default defineConfig({
  testDir: ".",
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: webBaseUrl,
    trace: "on-first-retry"
  },
  webServer: process.env.CI
    ? undefined
    : [
        {
          command: "npm run dev --workspace @faxinal-conectado/api",
          url: `${apiBaseUrl}/health`,
          reuseExistingServer: true
        },
        {
          command: "npm run dev --workspace @faxinal-conectado/web -- --host 127.0.0.1",
          url: webBaseUrl,
          reuseExistingServer: true
        }
      ],
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"], browserName: "chromium" } },
    { name: "chromium-tablet", use: { ...devices["iPad Pro 11"], browserName: "chromium" } },
    { name: "chromium-mobile", use: { ...devices["Pixel 5"], browserName: "chromium" } }
  ]
});
