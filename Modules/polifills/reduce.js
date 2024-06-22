Array.prototype.reducev2 = function (callback, initialValue) {
  let accumulator = initialValue;
  const list = this;
  if (!Array.isArray(list)) {
    throw new Error("Reduce can only be called on an array");
  }
  for (let i = 0; i < list.length; i++) {
    accumulator = callback(accumulator, list[i], i, list);
  }
  return accumulator;
};

function reducePolifillExample() {
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  const numbers = [1, 2, 3, 4, 5];
  console.log("Reducev2 demo:", numbers.reducev2(sum, 0));
}

export default reducePolifillExample;
