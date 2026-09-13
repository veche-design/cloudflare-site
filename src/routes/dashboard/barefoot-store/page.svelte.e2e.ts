import { expect, test } from '@playwright/test';

test('shows the Barefoot Store validation pathway', async ({ page }) => {
	await page.goto('/dashboard/barefoot-store');

	await expect(page.locator('h1')).toHaveText('Barefoot Store');
	await expect(page.getByRole('heading', { level: 2, name: 'Discover' })).toBeVisible();
});

test('links back to the dashboard', async ({ page }) => {
	await page.goto('/dashboard/barefoot-store');

	await page.getByRole('link', { name: /Back to dashboard/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/?$/);
});
