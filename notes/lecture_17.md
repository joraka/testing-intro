1. Repeat and check homework
2. Set/get variable as objects
3. Test isolation
4. Newman tool


## 1. Repeat and check homework


## 2. Set/get variable as objects
```javascript
function saveAminCredentials() {
    const admin_credentials = {
        username: "admin",
        password: "password123"
    }

    pm.collectionVariables.set('adminStr', JSON.stringify(admin_credentials));
}

saveAminCredentials();

pm.request.body.raw = pm.collectionVariables.get('adminStr');
```


```javascript
pm.test('Response body', () => {
    // const jsonData = pm.collectionVariables.get('responseCreateBooking');
    // const responseBody = JSON.parse(jsonData);

    const jsonData = pm.collectionVariables.get('requestCreateBooking');
    const requestBody = JSON.parse(jsonData);

    const responseBody = pm.response.json(); 

    pm.expect(responseBody.booking.firstname).to.be.a('string').and.to.equal(requestBody.firstname);
    pm.expect(responseBody.booking.lastname).to.be.a('string').and.to.equal(requestBody.lastname);
})
```


```javascript

const firstNames = [
    "Alice", "Bob", "Charlie", "Diana", "Ethan",
    "Fiona", "George", "Hannah", "Ian", "Jasmine",
    "Kevin", "Laura", "Michael", "Nina", "Oscar",
    "Paula", "Quentin", "Rachel", "Steven", "Tina"
];

const lastNames = [
    "Anderson", "Bennett", "Clark", "Dawson", "Evans",
    "Foster", "Garcia", "Hughes", "Irwin", "Johnson",
    "Klein", "Lopez", "Morris", "Nguyen", "Owens",
    "Parker", "Quinn", "Robinson", "Smith", "Taylor"
];

const additionalNeedsOptions = ["Breakfast", "Late checkout", "Early check-in", "Airport pickup", "Parking included", "Baby crib", "Extra pillows", "Room service", "Vegetarian meals", "High chair", "Luggage storage", "Quiet room", "King-size bed", "City view", "Ground floor room", "Daily housekeeping", "Spa access", "Wheelchair access", "Child seat", "Mini fridge"];


function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function generateRequestBody() {
    const checkInYear = getRandomNumber(2020, 2025);
    const checkInMonth = getRandomNumber(1, 12);
    const checkInDay = getRandomNumber(1, 28);
    const checkInDate = new Date(checkInYear, checkInMonth - 1, checkInDay);

    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkInDate.getDate() + 10); //check in days

    const checkInFullDate = checkInDate.toISOString().split('T')[0];
    const checkOutFullDate = checkOutDate.toISOString().split('T')[0];

    return {
        "firstname": getRandomItem(firstNames),
        "lastname": getRandomItem(lastNames),
        "totalprice": getRandomNumber(1, 1000),
        "depositpaid": getRandomBoolean(),
        "bookingdates": {
            "checkin": checkInFullDate,
            "checkout": checkOutFullDate
        },
        "additionalneeds": getRandomItem(additionalNeedsOptions)
    }
}

// pm.request.body.raw = JSON.stringify(generateRequestBody());

pm.request.body = {
    mode: "raw",
    raw: JSON.stringify(generateRequestBody())
}

pm.request.headers.add({
    key: "Content-Type",
    value: "application/json"
})

pm.collectionVariables.set('bookingInsertData', pm.request.body.raw)

```


