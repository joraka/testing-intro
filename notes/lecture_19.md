1. Repeat and check homework
2. Newman reports and environment variables
3. Clean git cache

## 1. Repeat and check homework


## 2. Newman reports and environment variables

https://learning.postman.com/docs/collections/using-newman-cli/newman-built-in-reporters/  

https://learning.postman.com/docs/collections/using-newman-cli/newman-custom-reporters/  

https://www.npmjs.com/package/newman-reporter-htmlextra  


Install htmlextra globally:
```bash
    npm install -g newman-reporter-htmlextra
```

Install htmlextra into local project (require package.json file):
```bash
    npm install -S newman-reporter-htmlextra
```

Generate htmlextra report:
```bash
    npx newman run postman_file_name.json -r htmlextra
```

Run postman tests with environment variables:

```bash
    npx newman run postman_file_name.json -e postman_environment_file_name.json 
```

## 3.Clean git cache
```bash
    git rm -r -f --cached "./newman"
```
