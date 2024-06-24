Array.prototype.reducev2 = function (callback, initialValue, context) {
  let accumulator;
  const list = this;
  if (!Array.isArray(list)) {
    throw new Error("Reduce can only be called on an array");
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  if (accumulator) {
    accumulator = initialValue;
  } else {
    accumulator = list[0];
  }
  for (let i = 0; i < list.length; i++) {
    accumulator = callback.apply(context, accumulator, list[i], i, list);
  }
  return accumulator;
};

function reducePolifillExample() {
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  const numbers = [1, 2, 3, 4, 5];
  console.log("Reducev2 demo:", numbers.reducev2(sum, 0));
}

export default reducePolifillExample;
