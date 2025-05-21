1. Repeat and check homework
2. Postman scripts


## 1. Repeat and check homework


## 2. Postman scripts

```javascript

pm.test('Response status code 200', ()=>{
    // pm.response.to.have.status(200);
    console.log(pm.response)
    console.log(pm.response.status)
    console.log(pm.response.code)
    pm.expect(pm.response.code).eq(200)

    pm.response.to.have.status(200)
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// console.log(pm.response.json())

// var json = pm.response.json()
// console.log(json)
// console.log(json.token)
// console.log(pm.response.json().token)

pm.collectionVariables.set('tokenCreate', pm.response.json().token);

console.log(pm.collectionVariables.get('tokenCreate'));

```

