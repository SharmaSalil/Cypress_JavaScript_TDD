/// <reference types="cypress" />
const { defineConfig } = require("cypress");

const dotenv = require('dotenv');
const path = require('path')

const envFilePath = path.join(__dirname, `env/${process.env.ENV}.env`)

console.log("envFilePath ::", envFilePath)

dotenv.config({ path: envFilePath })

module.exports = defineConfig({

  pageLoadTimeout: 30 * 1000,
  defaultCommandTimeout: 30 * 1000,
  experimentalMemoryManagement: true,
  chromeWebSecurity: false,
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