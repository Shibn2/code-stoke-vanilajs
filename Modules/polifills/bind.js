Function.prototype.bindv2 = function (context) {
  console.log("custom bind method called!", context);
  var fn = this;
  const newContext = {
    ...context,
    fn,
  };
  return function () {
    return newContext.fn(...arguments);
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

  function printName(auth) {
    console.log("printName method by", auth);
  }

  const bindedFn = printName.bindv2(person);
  bindedFn("Shibin"); // printName method John
  const bindedFn2 = printName.bindv2(person2);
  bindedFn2("Lal"); // printName method John
}

export default bindSample;
