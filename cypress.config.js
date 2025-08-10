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
    runMode: 1,   // 1 retry on mode headless/CI
    openMode: 0,  // no retry on open mode
  },
  video: false
});