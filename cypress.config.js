const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  pageLoadTimeout : 120000,
  defaultCommandTimeout : 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url : "https://staging.snoopstar.com",
    email : "client_automation@gmail.com",
    password : "Mindfire!1"
  }
});
