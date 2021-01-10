const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(this);
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

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();
car2.brake();
