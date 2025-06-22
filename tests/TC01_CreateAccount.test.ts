import { test } from "@playwright/test";
import { AccountsPage } from "../page-objects/accountsPage";
import { LoginPage } from "../page-objects/loginPage";

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
