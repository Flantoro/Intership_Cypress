const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: 'fpd6qk',
  e2e: {
    baseUrl: "https://telnyx.com/",
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
    retries: {
      runMode: 2,
      openMode: 0
    },
  },
});
