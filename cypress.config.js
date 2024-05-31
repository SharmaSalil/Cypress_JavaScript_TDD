/// <reference types="cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  pageLoadTimeout: 30 * 1000,
  defaultCommandTimeout: 30 * 1000,
  experimentalMemoryManagement: true,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns:true,
  reporter: 'cypress-mochawesome-reporter',

  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    screenshotOnRunFailure: true,
    screenshotsFolder: "./cypress/reports/screenshots/",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/**/*.js"
  },
});