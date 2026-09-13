import { expect, test } from '@playwright/test';

test('shows the Herbal Pharmacy validation pathway', async ({ page }) => {
	await page.goto('/dashboard/herbal-pharmacy');

	await expect(page.locator('h1')).toHaveText('Herbal Pharmacy');
	await expect(page.getByRole('heading', { level: 2, name: 'Operate' })).toBeVisible();
});

test('links back to the dashboard', async ({ page }) => {
	await page.goto('/dashboard/herbal-pharmacy');

	await page.getByRole('link', { name: /Back to dashboard/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/?$/);
});
