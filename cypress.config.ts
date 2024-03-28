import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com/",
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
