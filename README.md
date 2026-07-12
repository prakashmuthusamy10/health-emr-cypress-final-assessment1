# Health EMR Cypress Assessment

## Application

https://healthapp.yaksha.com/

### Credentials

Username: admin

Password: pass123

---

## Framework

Cypress

---

## Folder Structure

```text
health-emr-cypress-final-assessment/

cypress/
 ├── e2e/
 │    └── health-emr-registration.cy.js
 ├── fixtures/
 │    └── patient-data.json
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
 ├── screenshots/
 └── videos/

cypress.config.js
package.json
README.md
```

---

## Installation

```bash
npm install
```

## Open Cypress

```bash
npx cypress open
```

## Run Tests

```bash
npx cypress run --browser chrome
```

### Run Specific Spec

```bash
npx cypress run --spec "cypress/e2e/health-emr-registration.cy.js" --browser chrome
```

---

## Covered Test Cases

- TC01 Login Validation
- TC02 Dashboard Validation
- TC03 Patient Menu Expansion
- TC04 Register Patient Navigation
- TC05 Mandatory Field Validation
- TC06 Fixture Data Entry
- TC07 Screenshot Evidence
- TC08 Video Evidence
- TC09 Git Submission

---

## Evidence

Screenshots generated in:

```text
cypress/screenshots/
```

Videos generated in:

```text
cypress/videos/
```

---

## Assumptions

- Application is accessible.
- Credentials remain valid.
- Registration page field names remain unchanged.

---

## GitHub Repository
