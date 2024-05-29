/// <reference types="cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  pageLoadTimeout: 30 * 1000,
  defaultCommandTimeout: 30 * 1000,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern: "cypress/e2e/**/*.js"
  },
});