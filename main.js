"use strict";
function createCar(manufacturer, model, ...args) {
    let car = { manufacturer, model };
    for (let [key, value] of args) {
        car[key] = value;
    }
    return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(myCar);
