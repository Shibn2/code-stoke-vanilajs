function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

function curryN(fn) {
  const n = fn.length;
  const innerFn = (n, args) => {
    return function orgInnerFunction(a) {
      if (n <= 1) {
        return fn(...args, a);
      }
      return innerFn(n - 1, [...args, a]);
    };
  };
  return innerFn(n, []);
}
// curry function with two varibles
function curryExampleWith2Params() {
  const sum = (a, b) => a + b;

  const curriedSum = curry(sum);

  console.log(curriedSum(1)(2)); // 3
}

// curry function with n times calling with varibles
function curryExampleWithNParams() {
  const showVars = (a, b, c, d) => console.log("a", a, "b", b, "c", c, "d", d);

  const curriedShow = curryN(showVars);

  //   console.log("curriedSum with n values: 3, ", curriedShow(1)(2)(3)); // 6
  console.log("curriedSum with n values: 4, ", curriedShow(1)(2)(3)(4)); // 10
}

export { curryExampleWith2Params, curryExampleWithNParams };
