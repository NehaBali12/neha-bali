import { test } from "@playwright/test";

import { LoginPage } from "../page-objects/LoginPage";
import { AccountsPage } from "../page-objects/AccountsPage";

test.describe("Login to Goodbudget App and create account", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test("Create accounts and debt", async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    await accountsPage.clickOnAccountsLink();
  });
});
