1. Repeat and check homework
2. Run http-server
3. demo.html
4. Combinator 
5. xpath selectors
6. Readme

## 1. Repeat and check homework


## 2. Run http-server

https://www.npmjs.com/package/http-server  

Http-server installation:  
```bash
npm i -g http-server
```

```bash
npx http-server -p 8081
# or
npx http-server # default port is 8080
# open in browser http://localhost:8081/demo.html
``` 


## 3. demo.html

https://docs.cypress.io/app/core-concepts/variables-and-aliases  
>Arrow Functions
>Accessing aliases as properties with this.* will not work if you use arrow functions for your tests >or hooks.
>
>This is why all of our examples use the regular function () {} syntax as opposed to the lambda "fat >arrow" syntax () => {}.



## 4. Combinator

Cypress selectors (including xpath):  
https://www.cypress.io/blog/understanding-selectors-in-testing  

1. Child selector
   `cy.get('#myDiv > p');`  
   Selects only direct `<p>` children of `<div id="myDiv">`

2. Descendant Selector (Space ):  
   `cy.get('#myDiv p');`  
   Selects all `<p>` elements inside `<div id="myDiv">`

3. Adjacent Sibling Selector (+):  
   `cy.get('#myDiv + p');`  
   Selects the first `<p>` that comes immediately after `<div id="myDiv">`

4. General Sibling Selector (~):   
   `cy.get('#myDiv ~ p');`  
   Selects all `<p>` siblings that come after `<div id="myDiv">`

5. Combining Multiple Combinators:  
   `cy.get('#myDiv > ul > li + li');`  
   Selects the second `<li>` inside `<ul>` that is a direct child of #myDiv

## 5. xpath selectors


https://www.cypress.io/blog/understanding-selectors-in-testing  

https://www.npmjs.com/package/cypress-xpath  
https://www.npmjs.com/package/eslint-plugin-cypress  

Install xpath: 
```powershell
    npm install -D cypress-xpath
```
Import lib within js file:  
`require('cypress-xpath');`


Open search input within devtools CTRL + F
```
//body/*
//body//*
//body/*[5]
//body/*[5]//*

//p[@id="some_id"]
//p[@class="some-class-a"]
//p[contains(@class, "some-class-a")]

//h1[text()='Demo text']
//*[contains(text(), 'Lorem ipsum')]
(//*[contains(text(), 'Lorem ipsum')])[1]
```

https://www.w3schools.com/xml/xpath_syntax.asp  
https://www.w3schools.com/xml/xpath_intro.asp  
https://devhints.io/xpath  


## 6. Hooks

[Hooks link](https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Hooks)

```js
    before(() => {
    // root-level hook
    // runs once before all tests
    })

    beforeEach(() => {
    // root-level hook
    // runs before every test block
    })

    afterEach(() => {
    // runs after each test block
    })

    after(() => {
    // runs once all tests are done
    })
```
