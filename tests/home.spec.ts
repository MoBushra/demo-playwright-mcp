import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('should navigate to projects page using component', async ({ page }) => {
    await homePage.navComponent.navigateTo('projects');
    await expect(page).toHaveURL(/.*projects/);
  });
}); 