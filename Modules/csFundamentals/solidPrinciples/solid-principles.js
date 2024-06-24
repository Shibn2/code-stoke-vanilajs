import "./styles.css";

// 3. LISKOV PRINCIPLE
class MenuItem {
  constructor(price, name, desc) {
    this.price = price;
    this.name = name;
    this.desc = desc;
  }

  getPrice() {
    return this.price - this.getDiscount();
  }

  getDiscount() {
    return 0;
  }
}

class Beverages extends MenuItem {
  constructor(name, desc, price) {
    super(price, name, desc);
  }

  getPrice() {
    return this.price - this.getDiscount();
  }

  getDiscount() {
    return 5;
  }
}

class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly");
  }
}

function liskovPrincipleExample() {
  const budweiser = new Beverages("Bud", "beer", 200);
  const chickenTika = new MenuItem("chickenTikka", "curry", 350);

  const getPrice = (item) => {
    return item.getPrice();
  };
  console.log(getPrice(budweiser));
  console.log(getPrice(chickenTika));
  // Example 2
  function makeBirdFly(bird) {
    bird.fly();
  }
  const myPenguin = new Penguin();
  makeBirdFly(myPenguin); // Throws an error, "Penguins cannot fly"
}

// Is this child class a type of really parent class or child class.
// check by replacing parent class instance with child class and execute without break;
//

// 4. Integration seggregation principle
// Interfaces - Keep things abstract- hiding details and let classes implement them
// Principle states that design your interfaces in such a way that
// the classes that implement those interface does not have many unused functions
// Here we dont make the a single interface with more responsibilities
//  but create multiple interfaces with more dedicated functional chunks
// Media Player Interface
class MediaPlayer {
  playAudio() {
    throw new Error("playAudio method not implemented");
  }

  playVideo() {
    throw new Error("playVideo method not implemented");
  }
}

// Audio Player Interface
class AudioPlayer {
  playAudio() {
    console.log("Playing audio");
  }
}

// Video Player Interface
class VideoPlayer {
  playVideo() {
    console.log("Playing video");
  }
}

// Client using Audio Player
function playAudio(client) {
  if (client instanceof AudioPlayer) {
    client.playAudio();
  } else {
    throw new Error("Client does not support audio playback");
  }
}

// Client using Video Player
function playVideo(client) {
  if (client instanceof VideoPlayer) {
    client.playVideo();
  } else {
    throw new Error("Client does not support video playback");
  }
}

function ISPExample() {
  const audioPlayer = new AudioPlayer();
  const videoPlayer = new VideoPlayer();

  playAudio(audioPlayer); // Outputs: Playing audio
  playVideo(videoPlayer); // Outputs: Playing video
}

// 5. DEPENDENCY INVERSION PRINCIPLE
// High level modules should not depend on low level modules
// Both should depend on abstractions.
// Abstractions should not depend on implementation.
// Implementation should depend on abstraction.

// High level modules or low level modules in your code
// Should not depend on actual implementation.
// They should depend on abstraction.

// This example is through constructor injection
// Abstract class
class PaymentRequest {
  constructor() {}

  requestPayment(paymentDetails, amount) {
    // implementation
  }
}

// High level class uses the low the level classes
class PurchasePayment {
  constructor(payment) {
    this.payment = payment;
  }
  orderConfirmation() {
    // Depends on abstraction
    const paymentResponse = this.payment.requestPayment("", "");
    console.log(`Order confirmed with payment`, paymentResponse.status);
    return null;
  }
}

// Child class depend on abstraction
class PaypalPayment extends PaymentRequest {
  constructor() {}

  // method implementation
  requestPayment(paymentDetails, amount) {
    console.log("Paypal request initiated");
    return { status: "Succesfully completed!!" };
  }
}

// Child class depend on abstraction
class ApplePayment extends PaymentRequest {
  constructor() {
    super();
  }

  // method implementation
  requestPayment(paymentDetails, amount) {
    console.log("Apple request initiated");
    return { status: "Succesfully completed!!" };
  }
}

const applePay = new ApplePayment(); // Low level
const purchase = new PurchasePayment(applePay); // High level class

console.log(purchase.orderConfirmation());

// Example of Dependency Injection
class Logger {
  log(message) {
    console.log(`Log: ${message}`);
  }
}

class UserService {
  constructor(logger) {
    this.logger = logger;
  }

  getUser(id) {
    this.logger.log(`Fetching user with id ${id}`);
    // Logic to fetch user from database
    return { id, name: "John Doe" };
  }
}

function DIPExample() {
  const logger = new Logger();
  const userService = new UserService(logger);

  console.log;
}
// 2. OPEN CLOSE PRINCIPLE
// The OC principle state that software entities (classes, modules, functions) should be open for extension but closed for modification.
// You should be able to extend the behaviour of a module by not modifying the module source code.
// Shape class (Base class)
class Shape {
  // Area calculation method (to be overridden by subclasses)
  calculateArea() {
    throw new Error("calculateArea method must be implemented");
  }
}

// Rectangle class (Extends Shape)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Circle class (Extends Shape)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Example of extending without modifying existing code (Adding Triangle)
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

function OCPExample() {
  // Client code using Shape classes
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);

  console.log(rectangle.calculateArea()); // Output: 50
  console.log(circle.calculateArea()); // Output: ~153.94

  const triangle = new Triangle(4, 6);
  console.log(triangle.calculateArea()); // Output: 12
}

// 1. Single Responsibility Principle (SRP)
// The Single Responsibility Principle (SRP) is a fundamental principle of software design that states
// that a class or module should have only one reason to change.
// In other words, a class should have only one responsibility or job to accomplish,
// and it should encapsulate that responsibility.
// User management service
class UserService {
  getAllUsers() {
    // Logic to fetch all users from database
  }

  getUserById(id) {
    // Logic to fetch user by id from database
  }

  createUser(user) {
    // Logic to create a new user in the database
  }

  updateUser(id, user) {
    // Logic to update an existing user in the database
  }

  deleteUser(id) {
    // Logic to delete a user from the database
  }
}

// Authentication service
class AuthService {
  authenticate(username, password) {
    // Logic to authenticate user credentials
  }
}

// Benefits of Single Responsibility Principle:
// Separation of Concerns: Each class/module has a clear and focused responsibility,
// making the codebase easier to understand and maintain.
// Improved Testability: Classes with single responsibilities are easier to unit test,
// leading to more reliable tests.
// Flexibility: Changes in one responsibility are less likely to affect other parts of the system,
// promoting easier refactoring and extensibility.

export { liskovPrincipleExample, ISPExample, DIPExample, OCPExample };
