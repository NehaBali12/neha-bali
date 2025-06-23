import { test } from "@playwright/test";
import { AddTransactionPage } from "../page-objects/AddTransactionPage";
import { LoginPage } from "../page-objects/LoginPage";

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
