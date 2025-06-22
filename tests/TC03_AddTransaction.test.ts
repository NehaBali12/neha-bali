import { test } from "@playwright/test";
import { AddTransactionPage } from "../page-objects/addTransactionPage";
import { LoginPage } from "../page-objects/loginPage";

test.describe("Login to Goodbudget Application", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test("Add Transaction", async ({ page }) => {
    const addTransactionPage = new AddTransactionPage(page);
    await addTransactionPage.clickOnAddTransaction();
  });
});
