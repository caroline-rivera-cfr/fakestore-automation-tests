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
    or
    git clone https://gitlab.com/caroline-rivera-cfr/fakestore-automation-tests.git

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
  results/junit     # XML of JUnit test results
cypress.config.js   # Cypress configuration file
.gitlab-ci.yml      # Pipeline CI/CD (GitLab)

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

############################ API TESTS LOCAL ############################
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

############################# UI TESTS LOCAL ############################
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

################### API AND UI TESTS LOCAL WITH REPORT ##################
########################## Run Tests with bat ###########################

1. Double click "run-junit-reports.bat"

2. HTML Reports should be displayed for API and UI tests

################################## ON CI ################################
######################## Run Tests with Gitlab ##########################

1. Open 
    https://gitlab.com/caroline-rivera-cfr/fakestore-automation-tests/-/pipelines/

2. Click button "New pipeline" (blue)

3. Choose develop and no inputs 

4. Click button "New pipeline" (blue)

5. Jobs should be started

6. After a time, jobs should have "passed" flag

7. On tab "tests" you can see the test results

8. On tab "jobs" you can see the logs

Also:
New pipeline will be started when there are new commits to develop

#########################################################################
############################## INFORMATION ##############################
#########################################################################

########################### Main Technologies ###########################

Git
GitHub
Cypress
Node.js
Npm
JUnit

################################# Author ################################

Caroline Rivera
[GitHub Profile](https://github.com/caroline-rivera-cfr)