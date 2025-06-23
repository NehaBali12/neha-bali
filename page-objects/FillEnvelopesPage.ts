import { Locator, Page } from "@playwright/test";

export class FillEnvelopesPage {
  readonly page: Page;
  readonly amountTextBox: Locator;
  readonly fillEnvelopes: Locator;
  readonly payerTextBox: Locator;
  readonly scheduleCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.amountTextBox = page.getByRole("textbox", { name: "Amt" });
    this.fillEnvelopes = page.getByRole("link", { name: "Fill Envelopes" });
    this.payerTextBox = page.getByRole("textbox", { name: "Payer" });
    this.scheduleCheckbox = page.getByRole("checkbox", {
      name: "Schedule this...",
    });
  }

  /**
   * Click on Fill Envelope Link
   */
  async clickOnFillEnvelope() {
    await this.fillEnvelopes.click();
  }

  /**
   * Add new Income under fill envelope
   */
  async addNewIncome() {
    await this.amountTextBox.fill("4000");
    await this.payerTextBox.fill("Salary");
    await this.scheduleCheckbox.check();
  }
}
