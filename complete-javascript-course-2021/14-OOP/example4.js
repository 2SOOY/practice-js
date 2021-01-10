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

class ElectricCar extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBettery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    this.printInfo();

    return this;
  }

  printInfo() {
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`,
    );
  }
}

const car1 = new ElectricCar("Rivian", 120, 23);

car1
  .accelerate()
  .chargeBettery(50)
  .accelerate()
  .accelerate()
  .chargeBettery(90)
  .brake();
