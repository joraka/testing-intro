1. Repeat and check homework
2. E2E tests vs integration tests.
3. Get vs contains in cypress.
4. Actions in cypress: type and click.

## 1. Repeat and check homework

display all function parameters: 
/// <reference types="cypress" />


## 2. E2E tests vs integration tests.

E2E - tests the entire application, simulating real-world user scenarios from start to finish

Integration testing - focuses on verifying the interaction between integrated modules, components, or services.  

***AAA testing pattern***   
https://semaphoreci.com/blog/aaa-pattern-test-automation 

POM (Page Object Model) testing architecture very useful for Selenium and Playwrite.

***Test isolation***   
https://docs.cypress.io/app/core-concepts/test-isolation  

***Writing and Organizing tests***   
https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests  


### cypress.config.js  

```javascript
module.exports = defineConfig({
  e2e: {
    // e2e options here
    screenshotOnRunFailure: true, // by default is set up TRUE, works with cypress run only
    baseUrl: 'http://localhost:1234',
  },
})

```

Run browser `incognito`:  
https://docs.cypress.io/api/node-events/overview   
https://docs.cypress.io/api/node-events/browser-launch-api  

```javascript
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
```

## 3. Get vs contains in cypress.

***Best practices:***   
https://docs.cypress.io/app/core-concepts/best-practices   


***Contains function:***   
https://docs.cypress.io/api/commands/contains   

***Get function:***   
https://docs.cypress.io/api/commands/get   


## 4. Actions in cypress: type and click.
**Type function:**   
https://docs.cypress.io/api/commands/type  

**Click function:**  
https://docs.cypress.io/api/commands/click
