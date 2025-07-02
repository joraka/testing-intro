1. Repeat and check homework
2. Structuring with describe()
3. Readme
4. Intro to CI/CD
5. Virtual machines
6. Cypress run
7. cypress.config.js 


## 1. Repeat and check homework

## 2. Structuring with describe()
check attached file located `projects\13_cypress_demo\cypress\e2e\strucutingtests.cy.js`  

## 3. Readme

[GitHub markdown doc](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Require to answer core questions:  
1. Description
2. Tech stack or requirements
3. Installation
4. How to run

https://github.com/othneildrew/Best-README-Template  
https://github.com/dotnet/eShop  
https://github.com/aregtech/areg-sdk#readme  

Example for project file structure:  
```
    📁  
    ├── 📁 build
    ├── 📁 docs     # Documentation files 
    ├── 📁 src      # Source files
    ├── 📁 test     # Automated tests 
    ├── 📁 tools    # Tools and utilities
    ├── LICENSE
    └── README.md
```

## 4. Intro to CI/CD

![](/pictures/cicd.png)   

3rd guild app
4th testing
6th deploy (GitHub actions)

6th deploy (GitHub actions) has 2 main steps:
1. app build (npm i, npm run dev)
2. run required tests ( npm run api:test / npm run cy:headless)

GitHub actions also named pipeline.


## 5. Virtual machines

Some time ago you had host on application in one physical machine.  
    apps have usage spices (e-shopping before christmas, schools systems in Aug-Sep)

![](/pictures/virtualisation.png)  

* IaaS - Infrastructure as a Service  
* PaaS - Platform as a Service  
* SaaS - Software as a Service 

![](/pictures/saas.png)  

Docker containerize apps.
https://www.docker.com/ 


## 6. Cypress run

https://docs.cypress.io/app/references/command-line  
https://docs.cypress.io/app/references/launching-browsers  
https://docs.cypress.io/app/references/configuration  

```bash
npx cypress open # execute tests with UI (browser)
npx cypress run # execute tests in headless mode
```

Script examples:   
```json
"scripts": {
    "cy:open": "cypress open",
    "e2e:headless": "cypress run",
    "e2e:chrome": "cypress run --browser chrome",
    "e2e:spec_fl": "cypress run --browser chrome --spec 'cypress/e2e/spec.cy.js'"
  },
```

## 7. cypress.config.js 

https://docs.cypress.io/api/cypress-api/config  
https://docs.cypress.io/app/references/configuration#Test-Configuration  
https://peter.sh/experiments/chromium-command-line-switches/  

## 8. Cypress commands

https://docs.cypress.io/api/cypress-api/custom-commands   


