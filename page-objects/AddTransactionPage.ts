import { expect, Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";

export class AddTransactionPage {
  readonly page: Page;
  readonly addTransactionLink: Locator;
  readonly amount: Locator;
  readonly header: Locator;
  readonly payeeName: Locator;
  readonly saveButton: Locator;
  readonly selectEnvelope: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTransactionLink = page.locator('a[class="btn addTransaction"]');
    this.amount = page.getByLabel("Amount:").first();
    this.header = page.getByRole("heading", { name: "Add Transaction" });
    this.payeeName = page.getByRole("textbox", { name: "Payee:" });
    this.saveButton = page.getByRole("button", { name: "Save & New" });
    this.selectEnvelope = page.locator(
      'select[class="span5 required preventDebt"]'
    );
  }

  /**
   * To add transaction for the added envelope and account
   */
  async clickOnAddTransaction() {
    await this.page.waitForLoadState("networkidle");
    await this.addTransactionLink.click();
    await this.payeeName.fill(testData.transactionDetails.payee);
    await this.amount.fill(testData.transactionDetails.amount);
    await this.selectEnvelope.dblclick();
    await this.selectEnvelope.selectOption({
      index: 2,
    });
    const options = await this.selectEnvelope
      .locator("option")
      .allTextContents();
    await this.saveButton.click();
  }
}
