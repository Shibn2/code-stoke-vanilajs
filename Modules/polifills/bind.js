// Function.prototype.bindv2 = function (context) {
//   console.log("custom bind method called!", context);
//   var fn = this;
//   const newContext = {
//     ...context,
//     fn,
//   };
//   return function () {
//     return newContext.fn(...arguments);
//   };
// };

Function.prototype.bindV3 = function (context) {
  const callback = this;
  const key = Symbol();
  context[key] = callback;

  return function () {
    context[key](...arguments);
  };
};

function bindSample() {
  const person = {
    name: "John",
    age: 25,
  };
  const person2 = {
    name: "Shibin",
    age: 25,
  };

  function printName(val) {
    console.log("printName method by", val);
  }

  const bindedFn = printName.bindV3(person);
  bindedFn("Shibin"); // printName method John
  const bindedFn2 = printName.bindV3(person2);
  bindedFn2("Lal"); // printName method John
}

export default bindSample;
