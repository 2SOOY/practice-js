// Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.printInfo();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.printInfo();
};

Car.prototype.printInfo = function () {
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// ElectricCar
const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = charge;
};

// Link prototype
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBettery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  this.printInfo();
};

ElectricCar.prototype.printInfo = function () {
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`,
  );
};

const car1 = new ElectricCar("Tesla", 120, 23);
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.accelerate();
car1.chargeBettery(100);
car1.brake();
