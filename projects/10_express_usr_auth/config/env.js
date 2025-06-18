const dotenv = require("dotenv");

dotenv.config();

const requiredEnvConst = ["DB_USER", "DB_HOST", "DB_PASSWORD"];

requiredEnvConst.forEach((key)=>{
    if(!process.env[key]){
        throw new Error(`Env constant ${key} is missing`);
    }
});

module.exports = process.env;