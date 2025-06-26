1. Repeat and check homework
2. Automation testing
3. Cypress install
4. First test with cypress

## 1. Repeat and check homework

Data sets for jest and supertests:  
https://dev.to/avantar/using-data-sets-in-your-jest-tests-2b1  

## 2. Automation testing

Good for Regression, Smoke testing.

Test automation for web:  
1. Cypress (JS)  
2. Selenium (Java, C#, Python, JS) good to use with TestNG like JUnit  
3. Playwrite (Python, Java, C#, JS)  

Android mobile app:
1. Appium
2. Espresso

Require Android Studio (RAM 16G), AVD (android virtual device)
UI based on xml, compose

iOS mobile app:
1. XCUITest
2. Appium

## 3. Cypress install

https://www.cypress.io/  


Cypress installation:
```bash
    npm init -y
    npm install cypress --save-dev
```

CLI run Cypress:
```bash
npx cypress open
```

Run Cypress by script

```json
{
  "scripts": {
    "cy:open": "cypress open"
  }
}
```

```bash
npm run cy:open
```

To stop cypres just press CTRL + C


## 4. First test with cypress


https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test  

Command `contains`:  
https://docs.cypress.io/api/commands/contains  

Command `should`:
https://docs.cypress.io/api/commands/should  




