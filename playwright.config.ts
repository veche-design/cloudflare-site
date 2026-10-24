import { defineConfig } from '@playwright/test';

// Set PLAYWRIGHT_BASE_URL to run the e2e tests against an already deployed site (CI preview,
// production). Without it the tests run against a local build served by `vite preview`.
const baseURL = process.env.PLAYWRIGHT_BASE_URL || undefined;

export default defineConfig({
	webServer: baseURL ? undefined : { command: 'npm run build && npm run preview', port: 4173 },
	use: { baseURL },
	testMatch: '**/*.e2e.{ts,js}'
});
