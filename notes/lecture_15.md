1. Repeat and check homework
2. Postman scripts


## 1. Repeat and check homework


## 2. Postman scripts

Tests related with response Starting Line:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// suitable for POST requests only
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

pm.test("Response time is less than 800ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});

```


Tests related with response Headers:
```javascript
pm.test("Content-Type is present with values", function () {
    const headerContentType = pm.response.headers.get("Content-type");

    pm.response.to.have.header("Content-Type");
    pm.expect(headerContentType).to.include('application/json')
    pm.expect(headerContentType).to.include('charset=utf-8')
});
```

Tests related with response Body:

Get list of bookings:
```javascript
pm.test("Response body", function () {
    const responseBodyJson = pm.response.json();

    pm.expect(responseBodyJson).to.be.an("array")
    pm.expect(responseBodyJson.length).to.above(0)
    // pm.expect(responseBodyJson[0]).to.an("object")
    pm.expect(responseBodyJson[0].bookingid).to.an("number")
    // pm.expect(responseBodyJson[0].bookingid).is.not.empty
    pm.expect(responseBodyJson[0].bookingid).above(0)
});
```

Booking details response body:
```javascript
pm.test("Response body", function () {
    const responseBodyJson = pm.response.json();

    pm.expect(responseBodyJson.firstname).to.be.an("string")
    pm.expect(responseBodyJson.totalprice).to.be.an("number")
    pm.expect(responseBodyJson.bookingdates).to.be.an("object")
    pm.expect(responseBodyJson.depositpaid).to.be.an("boolean")
});

```
Booking details values:
```javascript
pm.test("Response body values", function () {
    var jsonData = pm.response.json();

    pm.expect(jsonData.firstname).to.eql("Jim");
    pm.expect(jsonData.lastname).to.eql("Jones");
    pm.expect(jsonData.totalprice).to.eql(285);
    pm.expect(jsonData.depositpaid).to.eql(true);

    pm.expect(jsonData.bookingdates.checkin).to.eql("2025-04-16");
    pm.expect(jsonData.bookingdates.checkout).to.eql("2025-04-22");
    pm.expect(jsonData.additionalneeds).to.eql("Breakfast");
});

```

Booking details combined check:
```javascript
pm.test("Response body keys", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.firstname).to.be.an("string").and.to.eql("Bruce")
});
```