1. Coding Postgres, JWT, env

## 1. Coding Postgres, JWT, env

code example of `env.js`:  
```javascript
const dotenv = require("dotenv");

dotenv.config();

const requiredEnvConst = ["DB_USER", "DB_HOST", "DB_PASSWORD"];

requiredEnvConst.forEach((key)=>{
    if(!process.env[key]){
        throw new Error(`Env constant ${key} is missing`);
    }
});

module.exports = process.env;
```

code example of `db.js`:  
```javascript
const pkg = require("pg");

const { Pool } = pkg;
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port:  process.env.DB_PORT,
    database:  process.env.DB_NAME
});

module.exports = pool;
```

code example of `dbinit.js`:  
```javascript
const pool = require('../config/db');

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            user_name VARCHAR(35) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL, 
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );
    `
    try {
        await pool.query(query);
        console.log("User table was created");
    } catch (error) {
        console.error("Error creating user table", error)
        process.exit(1);
    }
}

module.exports = createUserTable;
```
