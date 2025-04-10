function prototypeInheritance() {
  console.log("prototypeInheritance started");
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  console.log("Person log", Person);
  console.dir(Person);
  const p1 = new Person("Shibin");

  console.dir(p1);
  function Employee(name, title) {
    Person.call(this, name);
    this.title = title;
  }

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  Employee.prototype.getTitle = function () {
    return this.title;
  };

  const employee = new Employee("John Doe", "Software Engineer");
  console.log("employee", employee);
  console.log(employee.getName());
  console.log(employee.getTitle());
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent constructor
    this.grade = grade;
    this.study = this.study;
  }

  study = () => {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  };
}

function jsOOPStudyExample1() {
  const student1 = new Student("John", 16, 10);

  student1.sayHello(); // Output: Hello, my name is John and I am 16 years old.
  student1.study(); // Output: John is studying in grade 10.
  console.dir(student1);
  student1.study();
}

function jsOOPStudyExample2() {
  function Animal(legs, sound, color) {
    this.legs = legs;
    this.sound = sound;
    this.color = color;
    function makeSound() {
      console.log(this.sound);
    }
  }

  function Bird(legs, sound, color, fly) {
    Animal.call(this, legs, sound, color);
    this.fly = fly;
    this.canFly = canFly.bind(this);
    function canFly() {
      console.log(`${this.fly ? "Yes!!!" : "No!!!"}`);
    }
  }

  Bird.prototype.displayName = function () {
    console.log(this.name);
  };

  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird;
  const b = new Bird(2, "koo koo", "red", true);
}

class PersonT {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }
  getPersonData() {
    console.log(`Person name is ${this.name} his/her age is: ${this.age}`);
  }
}

class StudentT extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  getStudentDetails() {
    console.log(`Studen name is : ${this.name} is studying ${this.course}`);
  }
}

function piPractice() {
  // function PVehicle(color, type) {
  //   this.color = color;
  //   this.type = this.type;
  //   this.innerFn = function () {
  //     console.log("PVehicle inner function");
  //   };
  // }
  // PVehicle.prototype.displayDetails = function () {
  //   console.log(`This is a ${this.type} vehicle in ${this.color}!!!`);
  // };
  // function PBike(isSuperBike, color, type) {
  //   PVehicle.call(this, color, type);
  //   this.isSuperBike = isSuperBike;
  // }
  // PBike.prototype = Object.create(PVehicle);
  // PBike.prototype.constructor = PBike;
  // const b1 = new PBike(true, "Red", "2Wheeler");
  // console.log("1", b1.hasOwnProperty("type"));
  // console.log("1", b1.hasOwnProperty("displayDetails"));
  // console.log("1", b1.hasOwnProperty("innerFn"));

  const s1 = new StudentT("Shibin", "34", "BTech");
  console.dir(StudentT);
  console.log("1", s1.hasOwnProperty("getPersonData"));
}

export {
  prototypeInheritance,
  jsOOPStudyExample1,
  jsOOPStudyExample2,
  piPractice,
};
export default prototypeInheritance;
