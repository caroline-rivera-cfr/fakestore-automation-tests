// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
    env: {
      apiBaseUrl: 'https://fakestoreapi.com'
    }
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  
  video: process.env.CI ? false : true,
  screenshotOnRunFailure: process.env.CI ? false : true,
});