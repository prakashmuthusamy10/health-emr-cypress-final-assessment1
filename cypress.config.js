const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://healthapp.yaksha.com/',
        specPattern: 'cypress/e2e/**/*.cy.js',
        viewportWidth: 1366,
        viewportHeight: 768,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,
        video: true,
        screenshotOnRunFailure: true
    }
});