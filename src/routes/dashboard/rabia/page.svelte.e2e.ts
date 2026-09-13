import { expect, test } from '@playwright/test';

test('shows the Rabia validation pathway', async ({ page }) => {
	await page.goto('/dashboard/rabia');

	await expect(page.locator('h1')).toHaveText('Rabia — Afghan Food Products');
	await expect(page.getByRole('heading', { level: 2, name: 'Discover' })).toBeVisible();
});

test('links back to the dashboard', async ({ page }) => {
	await page.goto('/dashboard/rabia');

	await page.getByRole('link', { name: /Back to dashboard/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/?$/);
});
