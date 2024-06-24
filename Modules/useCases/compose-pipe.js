const getUser = (user) => user.name;

const toUpperCase = (str) => str.toUpperCase();

const greetPipe = (name) => `Hello Mr ${name}`;

const greetCompose = (name) => `Hello Mr ${name} , Welcome!!`;

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

function composePipeSample() {
  console.log(
    "Compose result",
    compose(greetCompose, toUpperCase, getUser)({ name: "Shibin" })
  );
  console.log(
    "Pipe result",
    pipe(getUser, toUpperCase, greetPipe)({ name: "Shibin" })
  );
}

export default composePipeSample;
