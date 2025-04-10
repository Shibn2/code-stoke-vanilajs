// if (!Function.prototype.callv2) {
//   Function.prototype.callv2 = function (context) {
//     const expectedContext = context || global;
//     const fn = this;
//     const key = Symbol();
//     expectedContext[key] = fn;

//     const args = [];
//     for (let i = 1; i < arguments.length; i++) {
//       args.push(arguments[i]);
//     }

//     const result = expectedContext[key](...args);
//     delete expectedContext[key];
//     return result;
//   };
// }

if (!Function.prototype.callV3) {
  Function.prototype.callV3 = function () {
    const callback = this;
    const context = arguments[0];
    const key = Symbol();
    context[key] = callback;

    let args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    const result = context[key](...args);
    delete context[key];
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
    console.log("Name", this.name);
    console.log("printName method by", author, "in his", attempt, "attempt");
  }

  printName.callV3(person, "shibin", "first"); // printName method John
  printName.callV3(person2); // printName method Shibin
}

export default callSample;
