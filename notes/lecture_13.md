1. Repeat and check homework
2. HTTP/HTTPS
3. Request methods and response codes
4. API documentation
5. Request queries


## 1. Repeat and check homework


## 2. HTTP/HTTPS

sniffing attack

https://www.okta.com/identity-101/sniffing-attack/  
https://www.greycampus.com/opencampus/ethical-hacking/sniffing-and-its-types  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP  

## 3. Request methods and response codes

[Request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)  
[Response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)   
https://httpstatusdogs.com/  

## 4. API documentation

[news api](https://newsapi.org/docs)  
[jsonplaceholder](https://jsonplaceholder.typicode.com)  
[Petstore api](https://petstore.swagger.io/) 

```json
{
   "id": 456,
   "name": "Some name",
   "key01": "value01",
}
```
baseUrl = example.com
{baseUrl}/v1/booking/:id
{baseUrl}/v1/booking/{id}

example.com/v1/booking/456

{baseUrl}/v1/{id}/booking
example.com/v1/456/booking


## 5. Request queries

https://newsapi.org/v2/everything?q=keyword&apiKey=144e0c5c31324ea199b7e9cb410e96d0
https://newsapi.org/v2/everything
?q=keyword&apiKey=144e0c5c31324ea199b7e9cb410e96d0

? -> indicates query
& -> 'and' require to combine different requests into one query
q=keyword -> it is parameter that contains 2 parts:
   1. key -> q
   2. valaue -> continue after '=' -> keyword


2nd parameter: apiKey=144e0c5c31324ea199b7e9cb410e96d0
