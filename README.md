# Playwright Test Automation for Studio Enass

This repository contains an automated testing suite for the [Studio Enass](https://www.studioenass.com/) website, built using [Playwright](https://playwright.dev/).

## Description

The primary goal of this project is to ensure the quality and reliability of the Studio Enass website by automating end-to-end tests. This suite covers various aspects of the site, including navigation, form submissions, and content verification.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MoBushra/demo-playwright-mcp.git
    cd demo-playwright-mcp
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## Usage

### Running Tests

You can run the tests in different ways depending on your needs.

-   **Run all tests in headless mode:**
    ```bash
    npm test
    ```
    This command will run all the test files located in the `tests/` directory on all configured browsers (Chromium, Firefox, and WebKit).

-   **Run tests in UI mode:**
    For a better debugging experience, you can use Playwright's UI mode.
    ```bash
    npm run test:ui
    ```

### Viewing Reports

After running the tests, a detailed HTML report is generated. To view the report, use the following command:

```bash
npm run test:report
```

This will open the report in your default browser, allowing you to see the results of the test run, including passed and failed tests, and traces for debugging.

## Project Structure

-   `tests/`: Contains all the test files (`.spec.ts`).
-   `pages/`: (If used) Contains page object models for different pages of the application.
-   `playwright.config.ts`: The main configuration file for Playwright.
-   `playwright-report/`: Contains the generated HTML reports after test execution.
-   `test-results/`: Contains the raw test results and traces.

## Contributing

Contributions are welcome! Please feel free to submit a pull request. 