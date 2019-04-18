class Vehicle {
    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }
    repair() {
        this.tripsSinceMaintenance = 0;
        console.log(`The Car is Repaired & trips are : ${this.tripsSinceMaintenance}`);
    }
    printDetails() {
        console.log(`Make : ${this.make} & Model : ${this.model}
From Year: ${this.year} & having Weight : ${this.weight}
Did Trips : ${this.tripsSinceMaintenance} & Needs Maintenance : ${this.needsMaintenance}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isDriving = false;
    }
    drive() {
        if (this.needsMaintenance === 100) console.log(`Your Car ${this.model} needs repair.`);
        this.isDriving = true;
        this.tripsSinceMaintenance += 1;
    }
    stop() {
        if (this.tripsSinceMaintenance === 100) this.needsMaintenance = true;
        this.isDriving = false;
    }
}

class Plane extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isFlying = false;
    }
    fly() {
        if (!this.needsMaintenance) {
            this.isFlying = true;
            this.tripsSinceMaintenance += 1;
            return true;
        }
        return false;
    }
    land() {
        if (this.tripsSinceMaintenance === 100) this.needsMaintenance = true;
        this.isFlying = false;
    }
}

const ferrari = new Car("sports", "Berlinetta", 2017, 1589.5);
const bugatti = new Car("sports", "Chiron", 2009, 2201.6);
const tesla = new Car("hybrid", "S", 2018, 1961);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < getRndInteger(90, 110); i++) {
    ferrari.drive();
    ferrari.stop();
}

ferrari.printDetails();

for (let i = 0; i < getRndInteger(90, 110); i++) {
    bugatti.drive();
    bugatti.stop();
}

bugatti.printDetails();

for (let i = 0; i < getRndInteger(90, 110); i++) {
    tesla.drive();
    tesla.stop();
}

tesla.printDetails();

tesla.repair();

tesla.printDetails();

const airbus = new Plane("A", "380", 2016, 5543);

let x;
for(x = 0; x < 105; x++) {
    if(!airbus.fly())
        break;
    airbus.land();
}
console.log(`The Plane Flew ${x} times.`);
airbus.printDetails();
