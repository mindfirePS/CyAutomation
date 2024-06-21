const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video :true,
    pageLoadTimeout : 120000,
    defaultCommandTimeout : 10000,
  e2e: {
    
  },
  env: {
    url : "https://staging.snoopstar.com",
    email : "client_automation@gmail.com",
    password : "Mindfire1!",
    fixtureFileName : "MyarStaggingLoginDetails"
    
  }
});
