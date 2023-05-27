class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
  
    changeAddress(newAddress) {
      this.address = newAddress;
      console.log(`My address has been changed to ${this.address}.`);
    }
  }
  
  const Joseph = new Person("Joseph Vijay", 30, "123 Main St");
  
  console.log(Joseph.name); 
  Joseph.introduce();  
  Joseph.changeAddress("456 Side St");

//Uberprice Calculator

class UberPriceCalculator {
    calculatePrice(distance, time) {

      const baseFare = 2.5;
      const costPerMile = 1.5;
      const costPerMinute = 0.2;
  
      const price = baseFare + distance * costPerMile + time * costPerMinute;
      return price;
    }
  }
  
  const priceCalculator = new UberPriceCalculator();
  
  const distance = 5;
  const time = 10;
  const price = priceCalculator.calculatePrice(distance, time);
  console.log(`The Uber price for a distance of ${distance} miles and ${time} minutes is $${price}.`);
  