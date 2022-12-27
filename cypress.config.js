const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'http://10.0.7.73:8000/home',
    specPattern: "cypress/e2e",
    supportFile: false,
},
env: {
    username : '',
    password : ''
}
});
