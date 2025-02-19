# QAfox Cypress Automation & Manual Testing Project

## Introduction
This project is a **comprehensive testing suite** for the [TutorialsNinja Demo](https://tutorialsninja.com/demo/) website. It includes both **manual and automation testing** using **Cypress**, following the **Agile methodology** to ensure iterative development, continuous feedback, and high-quality test coverage.

The project involves:
- **Manual Testing**: Test planning, test case creation, test execution, and bug reporting.
- **Automation Testing**: Writing and executing Cypress test scripts.
- **Agile Methodology**: Sprint-based approach with iterative improvements.


## Tech Stack
- **Automation Tool:** Cypress
- **Programming Language:** JavaScript
- **Test Runner:** Cypress Test Runner
- **CI/CD:** GitHub Action

## Agile Methodology Implementation
This project follows **Agile principles**:
- **Sprint Planning:** Defined test cases for manual and automation testing in each sprint.
- **Daily Stand-ups:** Regular discussions on testing progress and blockers.
- **Incremental Development:** Test cases were developed in iterations.
- **Sprint Reviews:** Test execution results were reviewed after every sprint.
- **Retrospectives:** Lessons learned and improvements for the next sprint.

## Manual Testing
The manual testing process involved:
1. **Test Plan Creation:** A structured document defining the scope, approach, and objectives.
2. **Test Scenarios:** High-level scenarios based on real user interactions.
3. **Test Cases:** Detailed steps with expected and actual results.
4. **Test Execution:** Manually testing each feature based on predefined test cases.
5. **Bug Reporting:** Logging defects in a bug tracking tool with detailed descriptions and steps to reproduce.

## Setup & Installation
To set up and run the Cypress tests locally, follow these steps:

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Cypress](https://www.cypress.io/)
- Git installed on your machine

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qafox-cypress-automation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```

## Test Execution
### Run tests in the browser:
```bash
npx cypress open
```
### Run tests in headless mode:
```bash
npx cypress run
```

## Test Cases Covered
The following key test scenarios have been automated and manually tested:
1. **User Authentication:** Login, Logout, and Signup
2. **Product Search & Filters:** Searching for products and applying filters
3. **Cart & Checkout:** Adding products to the cart, updating quantity, and proceeding to checkout
4. **Order Management:** Placing orders and verifying order history
5. **UI & Performance:** Validating UI elements and checking page load speed

## Bug Reporting
Bugs were documented in a structured format including:
- **Bug ID**
- **Title**
- **Steps to Reproduce**
- **Expected vs Actual Result**
- **Severity & Priority**
- **Screenshots (if applicable)**

## Reporting
Cypress generates test reports automatically. To view test results:
```bash
npx cypress run --reporter mochawesome
```
Reports are generated in the `cypress/reports` directory.

## CI/CD Integration
This project can be integrated with **GitHub Actions** or any CI/CD pipeline. A sample GitHub Actions workflow:
```yaml
name: Cypress Tests
on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Cypress Tests
        run: npx cypress run
```

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a new branch
3. Make changes and commit
4. Submit a pull request

## License
This project is licensed under the **MIT License**.
