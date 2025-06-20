import { Page, Locator } from '@playwright/test';

export class NavComponent {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly projectsLink: Locator;
  readonly servicesLink: Locator;
  readonly aboutLink: Locator;
  readonly pressLink: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.projectsLink = page.getByRole('link', { name: 'Projects' });
    this.servicesLink = page.getByRole('link', { name: 'Services' });
    this.aboutLink = page.getByRole('link', { name: 'About' });
    this.pressLink = page.getByRole('link', { name: 'Press' });
    this.contactLink = page.getByRole('link', { name: 'Contact' });
  }

  async navigateTo(link: 'home' | 'projects' | 'services' | 'about' | 'press' | 'contact') {
    switch (link) {
      case 'home':
        await this.homeLink.click();
        break;
      case 'projects':
        await this.projectsLink.click();
        break;
      case 'services':
        await this.servicesLink.click();
        break;
      case 'about':
        await this.aboutLink.click();
        break;
      case 'press':
        await this.pressLink.click();
        break;
      case 'contact':
        await this.contactLink.click();
        break;
      default:
        throw new Error('Invalid navigation link provided.');
    }
  }
} 