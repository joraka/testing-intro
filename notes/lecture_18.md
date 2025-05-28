1. Repeat and check homework
2. Dynamic variable
3. Test isolation
4. Newman tool
5. GitHub Actions run Newman
3. Newman reports


## 1. Repeat and check homework


## 2. Dynamic variable
Dynamic variables: 
https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/ 

Add dynamic variables in request body:  
```json
{
    "firstname" : "{{$randomFirstName}}",
    "lastname" : "{{$randomLastName}}",
    "totalprice" : {{$randomInt}},
    "depositpaid" : {{$randomBoolean}},
    "bookingdates" : {
        "checkin" : "{{$isoTimestamp}}",
        "checkout" : "2018-06-01"
    }
}
```


## 3. Test isolation

https://docs.cypress.io/app/core-concepts/test-isolation  
https://www.browserstack.com/guide/isolation-test 

1 scenario:

POST -> create new booking  
    run test scripts on response: 
     * response code
     * response time
     * response body (!) 

GET -> booking details (booking id)
    run test scripts on response: 
     * response code
     * response time
     * response body (!)

2.1 scenario:
POST -> create new booking (require for whole project, booking id) 
GET -> booking details (booking id)
DELETE -> delete booking by id

2.2 scenario:
POST -> create new booking (only for this scenario, booking id) 
DELETE -> delete booking by id
GET -> booking details (booking id)

## 4. Newman tool

https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/  

https://www.npmjs.com/package/newman  

Install newman globally:
```bash
    npm install -g newman
```

Run newman:
```bash
    newman run postman_file_name.json
```

## 5. GitHub Actions run Newman

### 1st option
all files attached in folder `./projects/06_newman/02_news_api_newman`  

```bash
# create folder
# copy postman json file
# run neman and check
git init
git add .
git commit -m "Initial commit"`

#create git repository and push from local to remote repo
git remote add origin https://github.com/Dailius/bt-20250129_news_api_newman.git
git branch -M main
git push -u origin main

# open VS Code in new window of current location
code . -n

# create directory .github/workflows
# create file file_name.yml
# add code into yml file
git push
```

**Add code into yml file**  
```yaml
name: Run Postman Tests with Newman

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  postman-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install Newman
        run: npm install -g newman

      - name: Run Postman tests with Newman
        run: newman run News-API.postman_collection.json
```


### 2nd option
all files attached in folder `./projects/06_newman/03_news_api_newman_node`  
```bash
# create folder
# copy postman json file
npm init -y

# install libraries and creates package-lock.json file
npm i

# run neman and check
git init
git add .
git commit -m "Initial commit"`
git log
# exit from git log pres key 'q'

# create script into package.json file and run
# commit changes

# push local into remote repo:
git remote add origin https://github.com/Dailius/bt-20250129_news_api_newman_node.git
git branch -M main
git push -u origin main

# github actions search and create node.js.yml file
git pull

# modify node.js.yml file locally

```

**Add code into yml file**  
```yaml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
  
    - name: Install Newman
      run: npm install -g newman

    - name: Run Postman tests by package scripts
      run: npm run test

```



