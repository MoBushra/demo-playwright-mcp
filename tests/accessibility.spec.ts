import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { ContactPage } from '../pages/ContactPage';

test.describe('Accessibility', () => {
  test('the home page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['landmark-main-is-top-level', 'landmark-no-duplicate-main', 'landmark-unique'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('the home page should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('the contact page should not have any automatically detectable accessibility issues', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.navigate();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['color-contrast', 'frame-title'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}); 