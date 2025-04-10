const getUser = (user) => user.name;

const toUpperCase = (str) => str.toUpperCase();

const greetPipe = (name) => `Hello Mr ${name}`;

const greetCompose = (name) => `Hello Mr ${name} , Welcome!!`;

const addTwo = (a, b) => a + b;

const displayResult = (x) => console.log("Displaying: ", x);

// Compose implimentation
const compose = (...callBackList) => {
  return (...initialParam) => {
    x;
    console.log("initialParam-->", initialParam);
    return callBackList.reduceRight((param, callBack) => {
      console.log("param-->", param);
      return callBack.apply(this, param);
    }, initialParam);
  };
};

// Pipe implimentation
const pipe = function (...callBackList) {
  return (...initialParam) =>
    callBackList.reduce(
      (param, callBack) => callBack.call(this, param),
      ...initialParam
    );
};

// Example
function composePipeSample() {
  console.log(
    "Compose result",
    compose(greetCompose, toUpperCase, getUser)({ name: "Shibin" })
  );
  console.log(
    "Pipe result",
    pipe(getUser, toUpperCase, greetPipe)({ name: "Shibin" })
  );
  const addAndDisplay = compose(displayResult, addTwo);
  console.log("addAndDisplay", addAndDisplay);
  console.log("Result -> ", addAndDisplay(2, 3));
}

export default composePipeSample;
