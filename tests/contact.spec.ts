import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import * as testData from '../data/test-data.json';

test.describe('Contact Form', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test('should submit the form with valid data', async () => {
    const { name, email, message } = testData.contact.valid;
    await contactPage.submitForm(name, email, message);
    await expect(contactPage.successMessage).toBeVisible();
  });

  test('should show validation messages for empty required fields', async ({ page }) => {
    await contactPage.sendMessageButton.click();

    const nameError = page.getByText('Please enter your name - this field is required');
    await expect(nameError).toBeVisible();

    const emailError = page.getByText('Please enter your email address - this field is required');
    await expect(emailError).toBeVisible();

    const messageError = page.getByText('Please enter your message - this field is required');
    await expect(messageError).toBeVisible();
  });
}); 