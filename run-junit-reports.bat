@echo off
setlocal
REM ensure the script runs from the project root even on double-click
cd /d "%~dp0"

REM (run once) install reporter/viewer dependencies
REM uncomment the next line the first time you run this script
REM call npm i -D mocha-junit-reporter junit-viewer

echo [1/5] Cleaning JUnit folder...
rmdir /s /q "cypress\results\junit" 2>nul
mkdir "cypress\results\junit\api_tests"
mkdir "cypress\results\junit\ui_tests"

echo [2/5] Installing and verifying Cypress...
call npx cypress install
call npx cypress verify

echo [3/5] Running API tests...
call npx cypress run --config retries=0 ^
  --reporter junit ^
  --reporter-options mochaFile=cypress/results/junit/api_tests/results-[hash].xml,toConsole=true ^
  --spec "cypress/e2e/api-tests/**/*.cy.js"

echo [4/5] Running UI tests...
call npx cypress run --config retries=0 ^
  --browser chrome --config-file cypress.config.js ^
  --reporter junit ^
  --reporter-options mochaFile=cypress/results/junit/ui_tests/results-[hash].xml,toConsole=true ^
  --spec "cypress/e2e/ui-tests/**/*.cy.js"

echo [5/5] Creating HTML reports (xunit-viewer)...
call npx xunit-viewer -r cypress\results\junit\api_tests -o cypress\results\junit\api_tests\report.html --title "API Tests"
call npx xunit-viewer -r cypress\results\junit\ui_tests  -o cypress\results\junit\ui_tests\report.html  --title "UI Tests"

echo.
echo Reports generated at:
echo   cypress\results\junit\api_tests\report.html
echo   cypress\results\junit\ui_tests\report.html

REM open reports automatically
start "" "cypress\results\junit\api_tests\report.html"
start "" "cypress\results\junit\ui_tests\report.html"

endlocal