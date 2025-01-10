const getUser = (user) => user.name;

const toUpperCase = (str) => str.toUpperCase();

const greetPipe = (name) => `Hello Mr ${name}`;

const greetCompose = (name) => `Hello Mr ${name} , Welcome!!`;

const addTwo = (a, b) => a + b;

const displayResult = (x) => console.log("Displaying: ", x);

const compose = (...fns) => {
  console.log("fns", fns);
  (...args) => {
    return fns.reduceRight((acc, fn) => {
      console.log("fn", fn, "acc", acc);
      return fn(acc), args;
    });
  };
};

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

function composePipeSample() {
  // console.log(
  //   "Compose result",
  //   compose(greetCompose, toUpperCase, getUser)({ name: "Shibin" })
  // );
  // console.log(
  //   "Pipe result",
  //   pipe(getUser, toUpperCase, greetPipe)({ name: "Shibin" })
  // );
  // const addAndDisplay = compose(displayResult, addTwo);
  // console.log("addAndDisplay", addAndDisplay);
  // console.log("Result -> ", addAndDisplay(2, 3));
  // apply use case
  // var name = "Nike";
  // function showName(price, color) {
  //   console.log(
  //     "Display the brand name: ",
  //     this.name,
  //     "price is: ",
  //     price,
  //     "and color is: ",
  //     color
  //   );
  // }
  // const obj1 = {
  //   name: "Adidas",
  // };
  // showName();
  // showName.apply(obj1, [20, "red"]);

  // function Animal(legs, sound, color) {
  //   this.legs = legs;
  //   this.sound = sound;
  //   this.color = color;
  //   function makeSound() {
  //     console.log(this.sound);
  //   }
  // }

  // function Bird(legs, sound, color, fly) {
  //   Animal.call(this, legs, sound, color);
  //   this.fly = fly;
  //   this.canFly = canFly.bind(this);
  //   function canFly() {
  //     console.log(`${this.fly ? "Yes!!!" : "No!!!"}`);
  //   }
  // }

  // Bird.prototype.displayName = function () {
  //   console.log(this.name);
  // };

  // Bird.prototype = Object.create(Animal.prototype);
  // Bird.prototype.constructor = Bird;
  // const b = new Bird(2, "koo koo", "red", true);

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

  const student1 = new Student("John", 16, 10);

  student1.sayHello(); // Output: Hello, my name is John and I am 16 years old.
  student1.study(); // Output: John is studying in grade 10.
  console.dir(student1);
  student1.study();
}

export default composePipeSample;
