import { Page, Locator } from '@playwright/test';
import { NavComponent } from '../utils/components/NavComponent';

export class HomePage {
  readonly page: Page;
  readonly navComponent: NavComponent;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navComponent = new NavComponent(page);
    this.title = page.locator('h1').first();
  }

  async navigate() {
    await this.page.goto('/');
  }
} 