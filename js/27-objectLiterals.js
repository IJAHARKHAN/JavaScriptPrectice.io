// object literals
// console.log('Object Literals');

// Objects Literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function() {
        console.log("Car is running.");
    }
}

// console.log(car.topSpeed);
// console.log(car.run());


let car1 = new GeneralCar('Nissan', 180);
let car2 = new GeneralCar('Maruti Alto', 80);
let car3 = new GeneralCar('Mecedes', 200);

// creating a cunstructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running`);
    }
    this.analyse = function() {
        console.log(`${this.name} is slower by ${200 - this.speed} Km/H than Mercedes`);
    }
}


console.log(car1.run());
console.log(car1.analyse());


// jobs will get when your english excellent and your physical body well