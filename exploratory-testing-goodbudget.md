# 🔘 Task 1

## Exploratory Testing (Goodbudget Web Application)

### 1. Exploratory testing charters

| ID  | TestCase Description                                        | Priority |
| :-- | :---------------------------------------------------------- | :------- |
| 1   | Authentication login/logout                                 | Medium   |
| 2   | Account addition (Bank Accounts/Credit Cards)               | Medium   |
| 3   | Envelope creation, editing, and deletion                    | High     |
| 4   | Transaction creation, editing and deletion                  | High     |
| 5   | Dashboard visualizations for the transactions and Reporting | High     |

---

## 2. Charter Findings

### 1: Authentication Login/Logout and User session & Settings (Medium Priority)

- **Actions:** Entered valid credentails
- **Findings:**
  - Authentication works fine.
  - Session persistence works fine across refresh.
  - No warning before session timeout or expiry.
  - Need Help block should popup only when clicked on,
    it is getting poped up everytime when loggedIn, while envelopes are created
- **Bug Severity:** Low

### 2: Account addition (Bank Accounts/Credit Cards) (Medium Priority)

- **Actions:** Added, edited and deleted accounts
- **Findings:**
  - Adding, editing and deleting of accounts worked correctly.
  - Large amount number is displayed out of box.
  - Displaying current balance should show some error message while entering alphabets.
    or it should not accept alphabets.
  - Choose currency dropdwon is not displayed nor multi currency options available.
  - After entering Debt details when clicked on Edit the UI gets disturbed.
    (x) sign comes under the input field.
- **Bug Severity:** Medium

### 3: Envelope Management (High Priority)

- **Actions:** Added, edited, and deleted envelopes.
- **Findings:**
  - Adding and editing envelopes worked correctly.
  - Long envelope names break the layout slightly.
  - Deletion lacks a robust confirmation mechanism.
- **Bug Severity:** Minor (UX)

### 4: Transaction Handling (High Priority)

- **Actions:** Added income and expenses, assigned to envelopes.
- **Findings:**
  - Transactions correctly reflected in envelope balances.
  - No validation warning for negative amounts entered in income.
  - No undo for accidental transaction deletion.
- **Bug Severity:** Medium

### 5: Dashboard visualizations for the transactions and Reporting (Medium Priority)

- **Actions:** Viewed spending reports and charts.
- **Findings:**
  - Reports update in near real-time.
  - Charts are not interactive (no tooltips, filtering).
- **Bug Severity:** Minor (UX)

---

## 3. Charter Prioritization

| Charter        | Reason for Priority                                     |
| -------------- | ------------------------------------------------------- | --- |
| 3, 4, 5 (High) | Core budgeting functionality—critical to app use        |
| 1, 2, (Medium) | Affect usability, data integrity, and technical quality |     |

## Conclusion

Status:\*\* Skipped – Add Credit card details feature because it is unavailable in Free Plan
