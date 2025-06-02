
function do_something_a() {
    return "Function do_something_a in action ...";
}

function do_something_b(text) {
    // return "Function do_something_a in action ...";
    console.log(text);
}

const do_something_c = function (text) {
    // some more code logic here
    console.log(text);
}

const do_something_d = (text) => {
    // some more code logic here
    console.log(text);
}

const do_something_dd = text => console.log(text);

const do_something_ddd = text => text.toLowerCase();

const do_something_dddd = text => {
    return text.toLowerCase()
};


console.log(do_something_a);
console.log(do_something_a());
do_something_b("Koks nuostabus rytas!");
do_something_c("Labas rytas!");
do_something_d("Labas rytas!");
do_something_dd("Labas rytas!");
console.log(do_something_ddd("PIRMADIENIS"))
console.log(do_something_dddd("PIRMADIENIS"))

console.log("\n" + "=".repeat(100) + "\n")

const calculate = (a, b) => a + b;

const calc_adv = (func, a1, b1, c) => {
    return func(a1, b1) + c;
}

const calc_adv_a = (func, c, ...args) => {
    return func(...args) + c;
}

console.log(calculate(3, 8));
console.log(calc_adv(calculate, 2, 3, 4))
console.log(calc_adv(calculate, 2, 3, 4))
console.log(calc_adv(calculate, 2, 3))
console.log(calc_adv(calculate, 2, 3, 5, 6, 7, 8))

console.log("\n" + "=".repeat(100) + "\n")

const car1 = {
    type: "audi",
    year: 2000,
    engine: {
        kw: 80,
        cap: 1120,
        fuelType: "Diesel"
    }
}

const car2 = {
    type: "toyota",
    year: 2015,
    engine: {
        kw: 200,
        cap: 4254,
        fuelType: "98"
    }
}

cars = [car1, car2];

console.log(cars);
console.log("\n", cars[1]);
console.log(`type is ${cars[1].type}`);
console.log("\n", cars[1].engine);

console.log(`fuel type is ${cars[1].engine.fuelType}`);

console.log(`1st cart kw is ${cars[0].engine.kw}`);

// type, year, kw


cars.forEach((elm, index) => {
    console.log(`NO: ${index + 1} | ${elm.type} | ${elm.year} | ${elm.engine.kw}`)
});

const print_data = (elm, index) => {
    console.log(`NO: ${index + 1} | ${elm.type} | ${elm.year} | ${elm.engine.kw}`)
}

cars.forEach(print_data);
