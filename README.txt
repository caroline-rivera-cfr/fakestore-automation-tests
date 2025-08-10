#################  Fake Store API and UI Tests (Cypress) ################

This project contains automated tests using Cypress to validate the Fake 
Store Project.

#########################################################################
############################### API TESTS ###############################
#########################################################################

################ Run Tests from Command Line (Headless) #################

1) Open terminal and go to main folder of project fakestore-automation-tests
Example:
cd C:\projetos\fakestore-automation-tests

2) Run commands:
npm init -y
npm install cypress --save-dev
npx cypress run --spec "cypress/e2e/api-tests/productsApiTest.cy.js"

Observation: UI tests can also be run on command line
npx cypress run --spec "cypress/e2e/ui-tests/productsUiTest.cy.js"

3) Results will appear in the terminal.
All 3 tests should pass.

#########################################################################
################################ UI TESTS ###############################
#########################################################################

####################### Run Tests in Cypress GUI #######################

1) Open terminal and go to main folder of project fakestore-automation-tests
Example:
cd C:\projetos\fakestore-automation-tests

2) Run commands:
npm init -y
npm install cypress --save-dev
npx cypress open

3) On Cypress, choose E2E Testing

4) Choose a Browser
Example: Chrome
And click button "Start E2E Test in Chrome"

5) Choose "productsUiTest.cy.js"

6) Results will be displayed.
All 2 tests should pass.