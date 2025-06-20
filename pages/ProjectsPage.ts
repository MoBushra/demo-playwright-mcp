import { Page, Locator } from '@playwright/test';
import { NavComponent } from '../utils/components/NavComponent';

export class ProjectsPage {
  readonly page: Page;
  readonly navComponent: NavComponent;

  constructor(page: Page) {
    this.page = page;
    this.navComponent = new NavComponent(page);
  }

  async navigate() {
    await this.page.goto('/projects');
  }

  async selectProject(projectName: string) {
    await this.page.getByRole('link', { name: new RegExp(projectName, 'i') }).click();
  }
} 