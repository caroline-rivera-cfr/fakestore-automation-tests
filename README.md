#################  Fake Store API and UI Tests (Cypress) ################

This project contains automated tests using Cypress to validate the Fake 
Store Project.

#########################################################################
############################# PREREQUISITES #############################
#########################################################################

Before running the tests, make sure you have:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git] (https://git-scm.com/downloads/win) (if cloning the repository)

#########################################################################
############################# INSTALLATION ##############################
#########################################################################

1. Open the terminal

2. Clone the repository
   git clone https://github.com/caroline-rivera-cfr/fakestore-automation-tests.git

3. Navigate to the project folder
   cd fakestore-automation-tests

4. Install dependencies
   npm install

#########################################################################
########################### PROJECT STRUCTURE ###########################
#########################################################################

cypress/
  e2e/              # UI and API test specifications
  support/          # Page Objects and custom commands
cypress.config.js   # Cypress configuration file

#########################################################################
############################## TEST TYPES ###############################
#########################################################################

API Tests: Validate the Fake Store REST API endpoints.
https://fakestoreapi.com/products

UI Tests: Validate the Fake Store web application user interface.
https://www.saucedemo.com/

#########################################################################
############################# RUNNING TESTS #############################
#########################################################################

############################### API TESTS ###############################
################ Run Tests from Command Line (Headless) #################

1. Open the terminal

2. Navigate to the project folder
    cd fakestore-automation-tests

3. Run command:
    npx cypress run --spec "cypress/e2e/api-tests/productsApiTest.cy.js"

Observation: UI tests can also be run on command line:
    npx cypress run --spec "cypress/e2e/ui-tests/productsUiTest.cy.js"

4. Results will appear in the terminal
    All 3 tests should pass

################################ UI TESTS ###############################
####################### Run Tests in Cypress GUI ########################

1. Open the terminal

2. Navigate to the project folder
    cd fakestore-automation-tests

3. Run command:
    npx cypress open

4. On Cypress, choose E2E Testing

5. Choose a Browser (example: Chrome)
    And click button "Start E2E Test in Chrome"

6. Choose "productsUiTest.cy.js"

7. Results will be displayed
    All 2 tests should pass

#########################################################################
############################## INFORMATION ##############################
#########################################################################

########################### Main Technologies ###########################

Git
GitHub
Cypress
Node.js
Npm

################################# Author ################################

Caroline Rivera
[GitHub Profile](https://github.com/caroline-rivera-cfr)