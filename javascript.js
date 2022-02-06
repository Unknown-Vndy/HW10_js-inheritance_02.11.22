'use strict';

class Vehicle{
   constructor(brand, model, manufactureDate, dimensions) {
      this.brand = brand;
      this.model = model;
      this.manufactureDate = new Date(manufactureDate);
      // ([this.length, this.width, this.height] = dimensions);
      this.dimensions = dimensions;
   }

   set manufactureDate(value) {
      if (value.getFullYear() < 1970) {
         throw new RangeError('year should be > 1970')
      }
      if (value > new Date()) {
         throw new RangeError('inccorect date, future')
      }
      this._manufactureDate = value;
   }

   get manufactureDate() {
      return this._manufactureDate;
   }

   set dimensions(arr) {
      for (let i = 0; i < arr.length; i++) {
         if (typeof arr[i] !== 'number') {
            throw new TypeError('sizes should be numbers')
         }
         if (arr[i] < 0) {
            throw new RangeError('sizes should be > 0');
         }
      }
      this._dimentions = arr;
   }

   get dimensions() {
      return this._dimentions;
   }

   getMaxSize() {
      return Math.max(...this.dimensions);
   }

   getAge() {
      return Math.trunc((new Date() - this.manufactureDate)  / (60 * 60 * 24 * 1000) / 365);
   }
}

class PassengerTransport extends Vehicle{
   constructor(brand, model, manufactureDate, dimensions, passengerLimit, passengerCount) {
      super(brand, model, manufactureDate, dimensions);
      this.passengerLimit = passengerLimit;
      this.passengerCount = passengerCount;
   }

   set passengerLimit(value) {
      if (typeof value !== 'number') {
         throw new TypeError('inccorect data dype');
      }
      if (value < 1) {
         throw new RangeError('passenger Limit should be > 0');
      }
      this._passengerLimit = value;
   }
   get passengerLimit() {
      return this._passengerLimit;
   }

   set passengerCount(value) {
      if (typeof value !== 'number') {
         throw new TypeError('inccorect data dype');
      }
      if (value < 0) {
         throw new RangeError('passenger counter should be >= 0');
      }
      this._passengerCount = value;
   }
   
   get passengerCount() {
      return this._passengerCount;
   }

   addPassenger() {
      if (this.passengerCount < this.passengerLimit) {
         this.passengerCount++;
         return true;
      } 
      return false;
   }
}

class FreightTransport extends Vehicle{
   constructor(brand, model, manufactureDate, dimensions, capacity) {
      super(brand, model, manufactureDate, dimensions);
      this.capacity = capacity;
   }

   set capacity(weight) {
      if (typeof weight !== 'number') {
         throw new TypeError('capacity should be number type');
      }
      if (weight < 0) {
         throw new RangeError('weight can not be negative number');
      }
      this._capacity = weight;
   }

   get capacity() {
      return this._capacity;
   }

   checkLoadingPossibility(weight) {
      return this.capacity >= weight;
   }
}



let carBMW;
try {
   carBMW = new Vehicle('bmw', '7series', [2021, 12, 10], [1, 1, 2.5]);   
} catch (error) {
   console.log(error);
}



// console.log(`${carBMW.brand} ${carBMW.model} age is ${carBMW.getAge()} years`);
// console.log(`the biggest dimentional size is ${carBMW.getMaxSize()}`);

let sprinter;
try {
   sprinter = new PassengerTransport('mersedes-benz', 'sprinter', [2019, 2, 15], [6, 2, 2.5], 20, 18);   
} catch (error) {
   console.log(error);
}

// sprinter.addPassenger();
// console.log(sprinter.addPassenger());
// console.log(sprinter.addPassenger());
// console.log(sprinter.addPassenger());
// console.log(sprinter);


let cargoTruck;
try {
   cargoTruck = new FreightTransport('MAN', 'van', [2018, 3, 18], [6, 2, 2.5], 3000);
} catch (error) {
   console.log(error);
}
// console.log(cargoTruck.checkLoadingPossibility(2999));
// console.log(cargoTruck.checkLoadingPossibility(3001));
// console.log(cargoTruck.getAge());