class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    this.printInfo();
  }

  brake() {
    this.speed -= 5;
    this.printInfo();
  }

  printInfo() {
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const car1 = new Car("Ford", 120);
car1.accelerate();
car1.accelerate();
car1.brake();

console.log(car1.speedUS);
car1.speedUS = 100;
console.log(car1.speedUS);
car1.brake();
