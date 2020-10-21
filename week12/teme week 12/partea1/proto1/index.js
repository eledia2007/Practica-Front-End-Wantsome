// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

//   var Vehicle = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Car = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Truck = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function(cargo) {
//       this.cargo.push(cargo);
//       return this;
//     };

//     this.unloadCargo = function() {
//       return this.cargo.pop();
//     };
//   };

class Vehicles {
    constructor(driver, speed) {
        this.driver = driver;
        this.speed = speed;
    }
    drive () {
        console.log(`${this.driver} is driving at ${this.speed} miles per hour`);
    }
}
class Car extends Vehicles {
    constructor(driver, speed) {
        super(driver, speed);
    }
        drive () {
            console.log(`${this.driver} is driving at ${this.speed} miles per hour`);
        }
    }
class Truck extends Vehicles {
    constructor(driver, speed, cargo) {
        super(driver, speed);
        this.cargo = cargo;

    }
    drive () {
        console.log(`${this.driver} is driving at ${this.speed} miles per hour`);
    }
    loadCargo (cargo) {
            this.cargo.push(cargo);
            return this;
        };

    unloadCargo () {
            return this.cargo.pop();
        };
    }

    const vehicle1 = new Vehicles("John Doe", "50");
    vehicle1.drive();

    