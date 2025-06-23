import { test } from "@playwright/test";

import { LoginPage } from "../page-objects/LoginPage";
import { AccountsPage } from "../page-objects/AccountsPage";

test.describe("Login to Goodbudget Application", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test("Create accounts", async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    await accountsPage.clickOnAccountsLink();
  });
});
