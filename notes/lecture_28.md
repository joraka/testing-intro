1. Repeat and check homework
2. Intro to security
3. JWT
4. API key vs. JWT
5. Attacks

## 1. Repeat and check homework


## 2. Intro to security
https

Authentication, Authorization

1st stp login -> response body contains TOKEN (JWT)
2nd stp request for service -> add TOKE into headers

Password -> is nota saved as plain text but is hashed.
Hash function -> password is encrypted.
Password hashing is one directional.

Hashing coalition

Hash + salting

https://auth0.com/blog/hashing-passwords-one-way-road-to-security/


## 3. JWT

https://jwt.io/

3 parts:
1. header
2. payload
3. signature


## 4. API key vs. JWT

API key may add into headers(authentication), url queries
API KEY is stable 

JWT -> request body, headers(authentication)
JWT -> has expiration

API key good for BE (connection between systems), very bad for FE.
JWT good for FE (user authentication and authorization), very bad for BE.

API key – A value provided by code when calling an API to identify and authorize the caller. It is intended to be used programmatically and is often a long string of letters and numbers.

Token – A piece of data that represents a user session or specific privileges. Used by individual users for a limited period of time.


## 5. Attacks

1. sniffing attack (solution is https)
2. dictionary attack (strong password, hashing + salting)
3. Injection attack 


## 6. Coding

```bash
npm i express bcryptjs dotenv jsonwebtoken pg
npm i wait-on concurrently --save-dev
```
