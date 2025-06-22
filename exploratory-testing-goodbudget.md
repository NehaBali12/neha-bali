# 🔘 Task 1

## Exploratory Testing (Goodbudget Web Application)

### 1. Exploratory testing charters

| TestCase ID | TestCase Description                                        | Priority |
| :---------- | :---------------------------------------------------------- | :------- |
| 1           | Authentication login/logout                                 | Medium   |
| 2           | Account addition (Bank Accounts/Credit Cards)               | Medium   |
| 3           | Envelope creation, editing, and deletion                    | High     |
| 4           | Transaction creation, editing and deletion                  | High     |
| 5           | Dashboard visualizations for the transactions and Reporting | High     |

---

## 2. Charter Findings

### C1: Envelope Management (High Priority)

- **Actions:** Added, edited, and deleted envelopes.
- **Findings:**
  - ✅ Adding and editing envelopes worked correctly.
  - ⚠️ Long envelope names break the layout slightly.
  - ⚠️ Deletion lacks a robust confirmation mechanism.
- **Bug Severity:** Minor (UX)

### C2: Transaction Handling (High Priority)

- **Actions:** Added income and expenses, assigned to envelopes.
- **Findings:**
  - ✅ Transactions correctly reflected in envelope balances.
  - ⚠️ No validation warning for negative amounts entered in income.
  - ❌ No undo for accidental transaction deletion.
- **Bug Severity:** Medium

### C3: Dashboard & Reports (Medium Priority)

- **Actions:** Viewed spending reports and charts.
- **Findings:**
  - ✅ Reports update in near real-time.
  - ⚠️ Charts are not interactive (no tooltips, filtering).
- **Bug Severity:** Minor (UX)

### C4: User Session & Settings (Medium Priority)

- **Actions:** Logged out and back in, changed account settings.
- **Findings:**
  - ✅ Session persistence works fine across refresh.
  - ⚠️ No warning before session timeout or expiry.
- **Bug Severity:** Low

### C6: DevTools – Network & Storage (Medium Priority)

- **Network Tab:**
  - ✅ Verified REST calls to endpoints like `/api/envelopes`, `/api/transactions`.
  - ⚠️ No clear error handling for failed requests (tested by disabling internet).
- **Application Tab:**
  - ✅ Cookies and localStorage used properly for session token.
  - ⚠️ Tokens not set to `HttpOnly` or `Secure` (potential risk).
- **Bug Severity:** Medium (Security/Resilience)

### C7: Lighthouse / aXe (Medium Priority)

- **Tools Used:** Chrome Lighthouse, axe DevTools extension
- **Findings:**
  - Performance Score: **78**
  - Accessibility Score: **86**
  - ⚠️ Color contrast issues in sidebar and reports
  - ⚠️ Missing `alt` text on some icons
- **Bug Severity:** Medium

---

## 🔢 3. Charter Prioritization

| Charter             | Reason for Priority                                     |
| ------------------- | ------------------------------------------------------- |
| C1, C2 (High)       | Core budgeting functionality—critical to app use        |
| C3, C6, C7 (Medium) | Affect usability, data integrity, and technical quality |
| C4 (Medium)         | Essential but not typically error-prone                 |
| C5 (Low)            | Impacts mobile UX but not core logic                    |

---

## ⚠️ 4. Risks Identified & Mitigation Strategies

| Risk                                       | Mitigation                                                |
| ------------------------------------------ | --------------------------------------------------------- |
| ❗ Loss of user data due to lack of undo   | Add undo option or soft-delete mechanism                  |
| ❗ Poor mobile experience on small screens | Improve responsive design testing and spacing             |
| ❗ Insecure token storage                  | Use secure, `HttpOnly` cookies with proper attributes     |
| ❗ Accessibility barriers                  | Fix color contrast, add `alt` tags, use semantic elements |
| ❗ Unhandled errors on network failure     | Add fallback UI, retry mechanisms, clear error messages   |

---

## 🛠️ 5. DevTools Highlights

### 🔍 Network Tab

- Verified REST endpoints:
  - `/api/envelopes`
  - `/api/transactions`
- **Issue:** Incomplete error handling on failure

### 🗃️ Application Tab

- Observed:
  - `localStorage`: Contains user session data
  - `Cookies`: No `Secure` or `HttpOnly` flags set

### 🌐 Lighthouse Report (Summary)

- **Performance:** 78 (Images not optimized, blocking JS)
- **Accessibility:** 86 (Contrast issues, missing labels)
- **Best Practices:** 88
- **SEO:** 92

---

## ✅ Conclusion

Status:\*\* Skipped – Add Credit card details feature it is unavailable in Free Plan
