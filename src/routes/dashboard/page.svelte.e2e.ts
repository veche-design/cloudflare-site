import { expect, test } from '@playwright/test';

test('links the Rabia card to its validation pathway', async ({ page }) => {
	await page.goto('/dashboard');

	await page.getByRole('link', { name: /Rabia/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/rabia\/?$/);
});

test('links the Barefoot Store card to its validation pathway', async ({ page }) => {
	await page.goto('/dashboard');

	await page.getByRole('link', { name: /Barefoot Store/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/barefoot-store\/?$/);
});

test('links the Herbal Pharmacy card to its validation pathway', async ({ page }) => {
	await page.goto('/dashboard');

	await page.getByRole('link', { name: /Herbal Pharmacy/ }).click();

	await expect(page).toHaveURL(/\/dashboard\/herbal-pharmacy\/?$/);
});
