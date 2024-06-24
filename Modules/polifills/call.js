if (!Function.prototype.callv2) {
  Function.prototype.callv2 = function (context) {
    const expectedContext = context || global;
    const fn = this;
    const key = Symbol();
    expectedContext[key] = fn;

    const args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    const result = expectedContext[key](...args);
    delete expectedContext[key];
    return result;
  };
}

function callSample() {
  const person = {
    name: "John",
    age: 25,
  };
  const person2 = {
    name: "Shibin",
    age: 25,
  };

  function printName(author, attempt) {
    console.log("this", this);
    console.log("printName method by", author, "in his", attempt, "attempt");
  }

  printName.callv2(person, "shibin", "first"); // printName method John
  printName.callv2(person2); // printName method Shibin
}

export default callSample;
