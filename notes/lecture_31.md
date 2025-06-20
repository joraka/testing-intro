1. Coding Postgres, JWT, env

## 1. Coding Postgres, JWT, env

[jsonwebtoken doc](https://www.npmjs.com/package/jsonwebtoken)  

code example of `jwt.js`:  
```javascript
const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env file");
}

const generateToken = (payload, expiresIn = "1h") => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateToken, verifyToken }
```

Middleware:  
https://expressjs.com/en/guide/using-middleware.html  
https://expressjs.com/en/resources/middleware.html  

code example of `auth.js`:  
```javascript
const { verifyToken } = require("./jwt");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    try {
        if (!token) {
            const error = new Error("Access denied");
            error.statusCode = 401;
            throw error
        }

        req.user = verifyToken(token);
        next();
    } catch (error) {
        console.error("Error on authentication: ", error);
        res.status(error.statusCode || 403).json({
            error: error.message == "jwt malformed" ? "Incorrect token" : error.message
        });
    }
}

module.exports = { authenticate }

```


