function Vehicle(brand, color, noOfTyres) {
  this.brand = brand;
  this.color = color;
  this.noOfTyres = noOfTyres;
  this.innerFn = function () {
    console.log("brand", this.brand);
  };
}
Vehicle.prototype.displayDetails = function () {
  console.log(
    " Brand: ",
    this.brand,
    "| Color: ",
    this.color,
    "| NoOfTyres: ",
    this.noOfTyres
  );
};

function prototypeFunctionExample() {
  const veh = new Vehicle("Tata", "red", 4);
  console.log("0", typeof veh);
  console.log("1 ", veh.hasOwnProperty("brand"));
  console.log("2", veh.hasOwnProperty("displayDetails"));
  console.log("3", veh);
  console.log("4", veh.hasOwnProperty("innerFn"));

  veh.displayDetails();

  function Bike(noOfTyres) {
    Vehicle.call(this, null, null, noOfTyres);
  }
  Bike.prototype = Object.create(Vehicle.prototype);
  Bike.prototype.constructor = Bike;

  console.dir(Bike);
  const b = new Bike(2);
  console.log("5 ", b);

  console.log("6", b.hasOwnProperty("brand"));
  console.log("7", b.hasOwnProperty("displayDetails"));
}

//---------------------------------------------//

//inheritance with class implementation
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
    this.innerFn = function () {
      console.log("Name: ", name);
    };
  }
  displayDetails() {
    console.log("Name: ", this.name, " | Height: ", this.height);
  }
}

class Predator extends Animal {
  constructor(name) {
    super(name);
  }
  displayDetails() {
    console.log("P Name: ", this.name, " | P Height: ", this.height);
  }
}
function protoTypeClassExample() {
  const a1 = new Animal("Tiger", "1m");
  console.log("2.1", a1);
  const p1 = new Predator("Lion");
  console.log("2.2 ", p1);
  console.log("2.3", p1.hasOwnProperty("innerFn"));
  console.log("2.3 ", p1.hasOwnProperty("displayDetails"));
  p1.displayDetails();
}

function objectCreateExample() {
  // With syntactic constructs.
  var objectOne = {
    a: 1,
  };

  var arrayOne = [1, 2, 3, 4];

  // Function prototype
  var fn2 = function () {
    console.log("f2");
  };

  console.log("functionOne", fn2);
  console.log("ObjectOne", objectOne);
  console.log("ArrayOne", arrayOne);

  // With a constructor
  function Graph() {
    this.vertices = [];
    this.edges = [];
  }

  var g = new Graph();
  console.log("Graph", g);

  // With Object.create
  var objectOg = {
    a: 1,
  };
  var object1 = Object.create(objectOg);
  console.log("Object1", object1);

  var objectD = Object.create(null);
  console.log("ObjectD", objectD);
}

export { prototypeFunctionExample, protoTypeClassExample, objectCreateExample };
