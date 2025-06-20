import { test, expect } from '@playwright/test';
import { ProjectsPage } from '../pages/ProjectsPage';
import * as testData from '../data/test-data.json';

test.describe('Project Page Navigation', () => {
  let projectsPage: ProjectsPage;

  test.beforeEach(async ({ page }) => {
    projectsPage = new ProjectsPage(page);
    await projectsPage.navigate();
  });

  for (const project of testData.projects) {
    test(`should navigate to the ${project.name} page`, async ({ page }) => {
      await projectsPage.selectProject(project.name);
      await expect(page).toHaveURL(new RegExp(project.url));
    });
  }
}); 