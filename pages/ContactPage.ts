import { Page, Locator } from '@playwright/test';
import { NavComponent } from '../utils/components/NavComponent';

export class ContactPage {
  readonly page: Page;
  readonly navComponent: NavComponent;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly sendMessageButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navComponent = new NavComponent(page);
    this.nameInput = page.getByLabel('Name*');
    this.emailInput = page.getByLabel('Email*');
    this.messageInput = page.getByLabel('Message*');
    this.sendMessageButton = page.getByRole('button', { name: 'Send Message' });
    this.successMessage = page.getByText("Thank you for your message. We'll get back to you soon.");
  }

  async navigate() {
    await this.page.goto('/contact-us');
  }

  async submitForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
    await this.sendMessageButton.click();
  }
} 