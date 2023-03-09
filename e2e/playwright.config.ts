import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'yarn dev',
    port: 3000,
  },
  timeout: 10000,
});
