1. Repeat and check homework
2. Testing framework Jest and Supertest

## 1. Repeat and check homework


## 2. Testing framework Jest and Supertest

### Jest
Contains test runner, assertion library, mocking  
Good for unit testing and has built-in support for mocking modules  
Easy configuration  

[Jest doc](https://jestjs.io/docs/getting-started)

### Supertest
Designed for HTTP assertions
Good for integration testing like routes/middleware

[Supertest doc](https://www.npmjs.com/package/supertest)


### code examples
```bash
    npm init -y
    npm install --save-dev jest
```

Create file for unit test `file_name.test.js`:
```javascript
test('Test name', () => {
    // some test actions

    // assert test results:
    expected();
});
```

Add script into package.json:
```json
"scripts": {
    "test": "jest"
  },
```

Run test:
```bash
npm test
```

Test examples from official documentation:  
https://jestjs.io/docs/using-matchers  

