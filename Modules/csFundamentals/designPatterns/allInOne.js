import "./styles.css";

// 1. CREATIONAL PATTERN.
// 1.1 Singleton pattern

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

class Normal {
  constructor() {}
  displayMessage() {
    console.log("Normal class");
  }
}

function singletonPatternStudy() {
  const sInst1 = new Singleton();
  const sInst2 = new Singleton();

  console.log("Is sigleton", sInst1 === sInst2);

  const nInst1 = new Normal();
  const nInst2 = new Normal();

  console.log("Is sigletone", nInst1 === nInst2);
}

// 1.2 Factory pattern

// With factory pattern we can use factory function to create new objects
// A function is a factory function when it returns an object even without calling new keyword.
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  getFullName: () => `${firstName}${lastName}`,
});

function factoryPatternStudy() {
  const user1 = createUser({
    firstName: "Shibin",
    lastName: "K",
    email: "",
  });
  console.log("user1", user1);
}

// 1.3 Prototype pattern.
// Prototype pttern is a usefull way to share properties among many objects of same types.
// Prototype is an object native to javscript.
// can be accesses by objects through prototype chain.
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return "Bow bow!!";
  }
}

function prototypePatternStudy() {
  const dog1 = new Dog("Daisy");
  const dog2 = new Dog("Max");

  console.log(">>", Dog.prototype);
  console.log("instance", dog1.__proto__);
}

// The value of __proto__ of any instance of a constructor is direct referecnce to the prototype of the constructor

// ------------------------**********************-----------------
// 2. STRUCTURAL DESIGN PATTERN
// 2.1 Proxy pattern
// Intercept and controll interactions to target objects.
// With proxy we get more controll over the interactions with certain objects.
//
const person = {
  name: "Shibin",
  age: 32,
  nationality: "Indian",
};

const personProxy = new Proxy(person, {
  set: (obj, prop, value) => {
    console.log("object", obj, "props in obj", obj[prop]);
    obj[prop] = value;
    return true;
  },
  get: (obj, prop) => {
    console.log("object", obj, "props in obj", obj[prop]);
  },
});

function proxyPatternStudy() {
  personProxy.name = "Hima";
}

// Proxy can be used for validation purpose.
// There is javasctript object called Reflect which can be used for the set.

// The second argument of Proxy is an object that represents the handler. In the handler object, we can define specific behavior based on the type of interaction. Although there are many methods that you can add to the Proxy handler, the two most common ones are get and set:

// get: Gets invoked when trying to access a property
// set: Gets invoked when trying to modify a property

// 2.2 Flyweight pattern
// Reuse existing instances when working with identical objects.
// The flyweight pattern is a useful way to conserve memory when we're creating a large number of similar objects.
// It wouldn't be very useful to create a new book instance each time if there are multiple copies of the exact same book. Instead, we want to create multiple instances of the Book constructor, that represent a single book.
class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Map();

const createBook = ({ name, author, isbn }) => {
  const isExisitngBook = books.has(isbn);

  if (isExisitngBook) {
    return books.get(isbn);
  }

  const newBook = new Book(name, author, isbn);
  books.set(isbn, newBook);
};

function flyweightPatternStudy() {
  createBook({ name: "Book1", author: "Shibin", isbn: "232njkjnknk" });
  console.log(">>>", books);
  createBook({ name: "Book1", author: "Shibin", isbn: "232njkjnknk" });
}

// 2.3 Facade design pattern
// It is a structural design pattern that provide a simplified and unified interface to a set of interfaces in a subsystem.
// It acts as a single entry point that hides the complexities and interactions of the subsystem components.
// Simplicity decoupling and abstaction.
// Observer pattern

class Subject {
  constructor() {
    this.subscribers = [];
  }

  addObserver(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeObserver(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notifyObserver(info) {
    this.subscribers.forEach((sub) => sub.update(info));
  }
}

class Observer {
  constructor() {}

  update(data) {
    console.log("Data received", data);
  }
}

function observerPatternStudy() {
  const subject = new Subject();

  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");
  const observer3 = new Observer("Observer 3");

  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);

  subject.notifyObserver("Hello, observers!");

  subject.removeObserver(observer2);

  subject.notifyObserver("Observer 2 removed.");
}

// 2.4 Decorator design pattern
// The Decorator design pattern is a structural pattern
// that allows you to add new behaviors or responsibilities
// to objects without altering their structure.
// In JavaScript, you can implement the Decorator pattern using prototypes, classes, or functions.

class Coffee {
  cost() {
    return 5;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 10;
  }
}

function decoratorPatternStudy() {
  const coffee1 = new Coffee();
  console.log("coffee1 cost", coffee1.cost());

  // decorated with Sugar
  const sugarCoffee = new SugarDecorator(coffee1);
  console.log("sugarCoffee cost ", sugarCoffee.cost());

  // decorated with Milk
  const milkCoffee = new MilkDecorator(sugarCoffee);
  console.log("milkCoffee cost", milkCoffee.cost());
}

export {
  prototypePatternStudy,
  singletonPatternStudy,
  proxyPatternStudy,
  flyweightPatternStudy,
  decoratorPatternStudy,
  observerPatternStudy,
  factoryPatternStudy,
};
