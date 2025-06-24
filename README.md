# neha-bali

# GoodBudget Automation

Automated tests for the [GoodBudget](https://www.goodbudget.com) web application using **Playwright** and **TypeScript**.

## Features

-Covered flows for:

- Login to the Application
- Creating & deleting **Envelopes**
- Creating **Accounts**
- Structured using **Page Object Model**
- Configurable via `.env` file
- Integrated with **Allure Reporting**
- Test data cleanup handled dynamically

## Project Setup

## 1. **Install dependencies**

```bash
npm install playwright
npm install dotenv
```

## 2. **Add `.env` file**

Create a `.env` in the root directory:

```env

URL=https://www.goodbudget.com
EMAIL=your@email.com
PASSWORD=yourPassword

```

```bash
npm install dotenv
```

Use with: `process.env.BASE_URL` in code

## 3. **Install Allure CLI** (if not already)

```bash
npm install -g allure-commandline
npm i -D allure-playwright allure-commandline
```

## 4. Extensions Added \*\*

- Prettier Code formatter
- Playwright Test for VS Code

## Running Tests

## Run All Tests can refer package.json

```bash
* Run npm run test to run test.ts files
* Run npm playwright test
```

## Run a Specific File

```bash
npm run test tests/envelope.test.ts
```

## Headed Mode

```bash
npx playwright test --headed
```

## 📊 Allure Report

## Generate Report

```bash
npx allure generate allure-results --clean
npm run allure:open-latest
```

## Open Report

```bash
npm run allure:open-latest
```

> Optional: Add to `package.json` scripts

```json
"scripts": {
    "test": "npx playwright test --reporter=html",
    "clean:allure-results": "rimraf allure-results",
    "clean:allure-report": "rimraf allure-report",
    "clean:allure": "npm run clean:allure-results && npm run clean:allure-report",
    "allure:generate": "allure generate allure-results --clean -o allure-report-$(date +'%Y-%m-%d_%H-%M-%S')",
    "allure:open-latest": "allure open $(ls -td allure-report-* | head -1)"
}
```

## Project Structure

```bash
.
├── tests/
│   ├── TC01_CreateAccount.test.ts
│   ├── TC02_CreateMultipleEnvelopes.test.ts
│   └── TC03_AddTransaction.test.ts
│   └── global-teardown.ts

├── page-objects/
│   ├── EnvelopePage.ts
│   ├── AccountPage.ts
│   └── AddTransactionPage.ts
│   └── CleanupTestdataPage.ts
│   └── FillEnvelopesPage.ts
│   └── LoginPage.ts

│── data/
│   ├──testdata.ts
├── .env
├── Dockerfile
├── docker-compose.yaml
├── playwright.config.ts
└── README.md
└── exploratory-testing-goodbudget.md
```

## Best Practices

- Use `test.describe()` to group flows
- Create envelope/account only when needed
- Cleanup data in `afterAll` if reused across tests
- Use `getByRole` and `getByLabel` for resilient locators
- Use `await expect(locator).toBeVisible()` for stability

## Docker Integration

```bash
- docker build -t playwright-tests .
```

## Parallel Test Execution

- Playwright supports parallel execution using multiple worker processes
- Tests are distributed across workers (parallel threads).
- Each worker runs in a separate browser context or browser instance.
- Configuration- `playwright.config.ts` file:

```ts
// playwright.config.ts
export default defineConfig({
  workers: process.env.CI ? 1 : undefined, // Set to desired number of parallel workers
  fullyParallel: true, // Run tests in parallel without queuing
  // ...
});
```

## Future Enhancements

- CI integration (e.g., GitHub Actions, Jenkins)
- Multi-environment config support
