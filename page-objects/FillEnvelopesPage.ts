import { Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";

export class FillEnvelopesPage {
  readonly page: Page;
  readonly amountTextBox: Locator;
  readonly fillEnvelopes: Locator;
  readonly payerTextBox: Locator;
  readonly scheduleCheckbox: Locator;
  readonly quickFillMenu: Locator;
  readonly dropdown: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.amountTextBox = page.getByRole("textbox", { name: "Amt:" });
    this.fillEnvelopes = page.getByRole("link", { name: "Fill Envelopes" });
    this.payerTextBox = page.getByRole("textbox", { name: "Payer" });
    this.scheduleCheckbox = page.getByRole("checkbox", {
      name: "Schedule this...",
    });
    this.quickFillMenu = page.getByRole("link", { name: "Add all" });
    this.dropdown = page.locator(
      'button[class="btn btn-fill dropdown-toggle"]'
    );
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  /**
   * Click on Fill Envelope Link and add new income
   */
  async fillEnvelope() {
    await this.fillEnvelopes.click();
    await this.amountTextBox.fill(testData.fillEnvelopeDetails.amount);
    await this.payerTextBox.fill(testData.fillEnvelopeDetails.payer);
    await this.scheduleCheckbox.check();
    await this.dropdown.first().click();
    await this.quickFillMenu.click();
    await this.saveButton.click();
  }
}
