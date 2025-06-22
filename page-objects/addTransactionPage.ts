import { Locator, Page } from "@playwright/test";

export class AddTransactionPage {
  readonly page: Page;
  readonly addTransactionLink: Locator;
  readonly amount: Locator;
  readonly payeeName: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTransactionLink = page.locator("a.btn addTransaction");
    this.amount = page.getByLabel("Amount:").first();
    this.payeeName = page.getByLabel("Payee:");
    this.saveButton = page.getByLabel("Save");
  }

  /**
   * To add transaction for the added envelope and account
   */
  async clickOnAddTransaction() {
    await this.addTransactionLink.click();
    await this.payeeName.fill("Adams");
    await this.amount.fill("150");
    await this.saveButton.click();
  }
}
