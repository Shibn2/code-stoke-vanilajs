function* genaratorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

function generatorFunWrapper() {
  const gen = genaratorFunction();
  console.log("genaratorFunction started", gen);
  console.log(gen.next());
  console.log(gen.next());
}

export default generatorFunWrapper;
