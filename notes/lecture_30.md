1. Coding Postgres, JWT, env

## 1. Coding Postgres, JWT, env

### newman request iteration

https://learning.postman.com/docs/collections/using-newman-cli/newman-options/#data-file-example  

--folder -> name of folder
-d -> external data, could be json or csv

```bash
newman run postman.json --folder "Create users" -d empty_array.json
```

### code examples

Hashing password: https://www.npmjs.com/package/bcryptjs  

code example of `hash.js`:  
```javascript
const bcryptjs = require("bcryptjs");

const hashPassword = (password) => bcryptjs.hash(password, 10);
const comparePassword = (plain_psw, hashed_psw) => bcryptjs.compare(plain_psw, hashed_psw);

module.exports = {hashPassword, comparePassword};
```




code example of ``:  
```javascript

```

code example of ``:  
```javascript

```

code example of ``:  
```javascript

```

