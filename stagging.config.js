const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video :true,
    pageLoadTimeout : 120000,
  e2e: {
    
  },
  env: {
    url : "https://staging.snoopstar.com",
    email : "client_automation@gmail.com",
    password : "Mindfire!1",
    langEN : "EN",
  }
});
