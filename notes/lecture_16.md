1. Repeat and check homework
2. Postman scripts


## 1. Repeat and check homework


## 2. Postman scripts

Add apiKey into headers by script:
```javascript
    pm.request.headers.add({
        key:"x-api-key",
        value: pm.collectionVariables.get("apiKey")
        // value: "asd6f5494we8r46s5d4f"
    });

    pm.request.headers.add({
        key: "cookie",
        value: "token=" + pm.collectionVariables.get("token")
    });

    pm.request.headers.add({
        key: "Accept",
        value: "application/json"
    });

```

Provide credentials by scripts:
```javascript
// Add credentials as bobject into collection variables
pm.collectionVariables.set("userCredentials", JSON.stringify({
    username: "admin",
    password: "password123"
}));

// it works when raw in body is selected
pm.request.body.raw =  JSON.stringify({
    username: "admin",
    password: "password123"
});
```

```javascript

pm.request.body.raw =  JSON.stringify({
    username: "admin" + Date.now(),
    password: "password123"
});


function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

pm.request.body.raw =  JSON.stringify({
    username: "admin",
    password: generateRandomString(15)
});
```

```javascript
```
