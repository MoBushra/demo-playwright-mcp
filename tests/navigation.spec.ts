import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NavComponent } from '../utils/components/NavComponent';

test.describe('Navigation', () => {
  let homePage: HomePage;
  let navComponent: NavComponent;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navComponent = new NavComponent(page);
    await homePage.navigate();
  });

  const navLinks: { name: 'projects' | 'services' | 'about' | 'press' | 'contact', url: RegExp }[] = [
    { name: 'projects', url: /.*projects/ },
    { name: 'services', url: /.*services/ },
    { name: 'about', url: /.*aboutus/ },
    { name: 'press', url: /.*press/ },
    { name: 'contact', url: /.*contact-us/ },
  ];

  for (const link of navLinks) {
    test(`should navigate to the ${link.name} page`, async ({ page }) => {
      await navComponent.navigateTo(link.name);
      await expect(page).toHaveURL(link.url);
    });
  }
}); 