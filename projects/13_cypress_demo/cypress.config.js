const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    baseUrl: 'https://semaphore.io/blog',
    defaultCommandTimeout: 2000,

    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if(browser.name === "chrome"){
          launchOptions.args.push(
            "--incognito"
          )
        }

        return launchOptions;
      })

    },
  },
});
