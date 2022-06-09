import { expect, test } from '@playwright/test';

test('index page loads in @rd-dlux and uses it to capitalize "world"', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('CMcCulloh');
});
