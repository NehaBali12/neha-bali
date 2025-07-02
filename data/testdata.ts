import { FillEnvelopesPage } from "../page-objects/FillEnvelopesPage";

export const testData = {
  invalidUser: {
    username: "invalid@example.com",
    password: "wrongPassword",
  },

  dashboard: {
    title: "Home | Goodbudget",
  },

  envelopes: [
    { name: "Groceries", amount: "500" },
    { name: "Rent", amount: "1200" },
    { name: "Utility", amount: "200" },
    { name: "miscellaneous", amount: "200" },
  ],

  transactionDetails: { payee: "Adams", amount: "150" },

  debtAccountDetails: {
    name: "House",
    currentBalance: "14000",
    monthlyPayment: "230",
    interestRate: "8",
  },

  fillEnvelopeDetails: { amount: "2000", payer: "Salary" },
};
