// const add = (a, b) => a + b
// const memoizeAdd = memoizeOne(add)
// memoizeAdd(1, 2) // 3

function memoizeOne(fn) {
  const cache = {};
  return function (...args) {
    console.log("args", args[0]);
    const key = JSON.stringify(args);
    if (key in cache) {
      // the result is available in the cache
      return cache[key];
    } else {
      // the result is not available in the cache
      const res = fn.apply(this, args);
      cache[key] = res;
      return res;
    }
  };
}

function memoizeUtility() {
  function add(a, b) {
    return a + b;
  }

  const memoizeAdd = memoizeOne(add);
  console.log(">>", memoizeAdd(1, 2)); // 3
}

export default memoizeUtility;
