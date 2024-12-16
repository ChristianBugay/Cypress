const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
    },
    setupNodeEvents(on, config) {
      
    },
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  }
});