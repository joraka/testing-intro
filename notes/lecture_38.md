1. Repeat and check homework
2. Single page apps (spa). Website vs web applications.
3. React
4. Scripts
5. Github actions pipelines

## 1. Repeat and check homework


## 2. Single page apps (spa). Website vs web applications.

https://webflow.com/blog/90s-website-design  
https://www.sejda.com/pdf-editor  


## 3. React

Framework React, Angular, jQuery ...
https://react.dev/  
https://react.dev/guide  

Old way to initiate and manage `React` projects:  
https://create-react-app.dev  
https://create-react-app.dev/docs/getting-started  

New core `React` framework is `Vite`
https://vite.dev/ 
https://vite.dev/guide/  


```bash
npm create vite@latest . # initiate react project in current folder
# type `y` and press [ENTER]
# select REACT
# select JavaScript

# install all libraries in package.json
npm i

# run app
npm run dev

# app is accessible in http://localhost:5173
```

In the project important files:
1. package.json
2. App.jsx

Tik-Tak-Toe tutorial:  
https://react.dev/learn/tutorial-tic-tac-toe#wrapping-up


## 4. Scripts


## 5. Github actions pipelines


## 6. Tic-Tac-Toe TS & TC:

TS 1. Player turn
TS 2. Next turn status message
TS 3. Executed turn message
TS 4. Restart game
TS 5. Winner

TS 1. Player turn
    TC 1.1 First turn by 'X'
    TC 1.2 Next 2nd turn by 'O'
    TC 1.2 Click on selected 'X' as First turn    
    TC 1.2 Click on selected 'O' as 2nd turn    

TS 5. UI/UX
    TC 5.1. Squares is visible in game board

Install cypress lib:  
```bash
npm i cypress --save-dev
```

Install test server. Good for running apps with cy tests and closes app when tests are completed:
```bash
npm install --save-dev start-server-and-test
```

package.json script:
`cy:dev": "start-server-and-test dev http://localhost:5173 cy:open`

`start-server-and-test <script_name_to_start_app> <port_to_wait_for_open> <script_name_start_cypress_tests>` 

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:dev": "start-server-and-test dev http://localhost:5173 cy:run"
  },
```


