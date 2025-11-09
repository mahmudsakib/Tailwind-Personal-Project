import { test, expect } from '@playwright/test';

// Basic smoke test for the local dev server pages created in this project.
// Assumes your dev server is running at http://localhost:5173/ (run `npm run dev`).

test.describe('Seed tests', () => {
  test('visit index and see shared header and nav', async ({ page }) => {
    // Navigate to the local dev server. Adjust if you use a different host/port.
    await page.goto('http://localhost:5173/');

    // Page title should contain either the Vite placeholder or your site title.
    await expect(page).toHaveTitle(/Tailwind \+ Vite|Portfolio/i);

    // The header injected by src/components/header.js should be visible.
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Basic nav links should exist.
    await expect(page.locator('header a', { hasText: 'About' })).toBeVisible();
    await expect(page.locator('header a', { hasText: 'Projects' })).toBeVisible();
    await expect(page.locator('header a', { hasText: 'Contact' })).toBeVisible();
  });
});
