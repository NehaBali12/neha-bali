import { test } from "@playwright/test";
import { EnvelopesPage } from "../page-objects/EnvelopesPage";
import { FillEnvelopesPage } from "../page-objects/FillEnvelopesPage";
import { LoginPage } from "../page-objects/LoginPage";

test.describe.configure({ mode: "serial" });

test.describe("Login to Goodbudget App and create envelopes", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.login();
  });

  test.only("Create envelopes", async ({ page }) => {
    const envelopesPage = new EnvelopesPage(page);
    await envelopesPage.addMultipleEnvelops();
  });

  test("Fill envelopes", async ({ page }) => {
    const fillEnvelopesPage = new FillEnvelopesPage(page);
    await fillEnvelopesPage.clickOnFillEnvelope();
  });
});
