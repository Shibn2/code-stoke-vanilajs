const person = {
  name: "Alex",
  age: 25,
};

const personProxy = new Proxy(person, {
  get: function (target, property) {
    console.log("In proxy: get | target,", target, "property,", property);
    return target[property];
  },
  set: function (target, property, value) {
    console.log("In proxy: set | property, value", property, value);
    target[property] = value;
    return true;
  },
});

function proxyPatternSample() {
  personProxy.name = "John";
  console.log("Display name: ", personProxy.name);
}

export { proxyPatternSample };
