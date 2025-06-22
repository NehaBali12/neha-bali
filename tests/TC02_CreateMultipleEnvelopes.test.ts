import { test } from "@playwright/test";
import { EnvelopesPage } from "../page-objects/envelopesPage";
import { FillEnvelopesPage } from "../page-objects/fillEnvelopesPage";
import { LoginPage } from "../page-objects/loginPage";

test.describe("Login to Goodbudget Application", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.login();
  });

  test("Create envelopes", async ({ page }) => {
    const envelopesPage = new EnvelopesPage(page);
    await envelopesPage.addMultipleEnvelops();
  });

  test("Fill Envelopes", async ({ page }) => {
    const fillEnvelopesPage = new FillEnvelopesPage(page);
    await fillEnvelopesPage.clickOnFillEnvelope();
    // await fillEnvelopesPage.addNewIncome();
  });

  test("delete envelopes", async ({ page }) => {
    const envelopesPage = new EnvelopesPage(page);
    await envelopesPage.deleteAllEnvelopes();
  });
});
