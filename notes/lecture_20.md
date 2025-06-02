1. Repeat JavaScript
2. Node express User Auth project 

## 1. Repeat JavaScript


## 2. Node express User Auth project 

```javascript
    const express = require("express");

    const port = 3011;
    const app = express();

    // http://localhost:3011/
    app.use(express.json());

    const users = [];

    app.get("/", (req, res) => {
        res.status(200).send("Hello world!");
    });

    app.listen(port, () => {
        console.log(`Server is running http://localhost:${port}`);
        // localhost ip address is 127.0.0.1
    });
```
