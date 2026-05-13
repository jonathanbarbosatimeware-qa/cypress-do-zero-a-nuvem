const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wd3cv2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
  },
  video: true,
});