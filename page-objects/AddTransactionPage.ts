import { expect, Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";

export class AddTransactionPage {
  readonly page: Page;
  readonly addTransactionLink: Locator;
  readonly amount: Locator;
  readonly payeeName: Locator;
  readonly saveButton: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTransactionLink = page.locator('a[class="btn addTransaction"]');
    this.amount = page.getByLabel("Amount:").first();
    this.payeeName = page.getByRole("textbox", { name: "Payee:" });
    this.saveButton = page.getByRole("button", { name: "Save & New" });
    this.header = page.getByRole("heading", { name: "Add Transaction" });
  }

  /**
   * To add transaction for the added envelope and account
   */
  async clickOnAddTransaction() {
    await this.addTransactionLink.click();
    await this.page.evaluate(() => {
      const el = document.querySelector(
        "div.add-transaction pub modal hide fade"
      );
      if (el) {
        el.classList.remove("hidden");
        el.classList.add("visible");
      }
    });
    await this.header.isVisible({ timeout: 10000 });
    const data = testData.transactionDetails;
    await this.payeeName.fill(data[0].payee);
    await this.amount.fill(data[0].amount);
    await this.saveButton.click();
  }
}
