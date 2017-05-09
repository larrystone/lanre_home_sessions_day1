'use strict';

class House {
  constructor (color, owner, purpose, houseLocation, numberOfRooms) {
    this._owner = owner;
    this._purpose = purpose;
    this._houseLocation = houseLocation;
    this._numberOfRooms = numberOfRooms;
    this._owner = owner;
  }
  
  paintHouse(color) {
    this._color = color;
  }
  
  getColor() {
    return this._color;
  }
  
  getNoOfRooms() {
    return this._numberOfRooms;
  }
  
  getLocation() {
    return this._houseLocation;
  }
  
  getOwner() {
    return this._owner;
  }
  
  getPurpose() {
    return this._purpose;
  }
  
  setPurpose(purpose) {
    this._purpose = purpose;
  }
}

class Skycrapper extends House {
    constructor (color, owner, purpose, houseLocation, numberOfRooms, noOfFloors) {
      super (color, owner, purpose, houseLocation, numberOfRooms)
      
      this._noOfFloors = noOfFloors;
    }
    
    getNoOfFloors() {
      return this._noOfFloors;
    }
}

class Shop extends House {
  constructor (color, owner, houseLocation) {
      super (color, owner, "Business", houseLocation, 1)
  }
  
  setPurpose(purpose) {
    this._purpose = "Business";
  }
}
