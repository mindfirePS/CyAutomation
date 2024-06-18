const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout : 720000,
    video:true,
  e2e: {
   
  },
  env: {
    url : "http://188.118.60.68",
    email : "clientdeepak@gmail.com",
    password : "Mindfire1!"
    
  }
});
