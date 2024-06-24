function round1Var() {
  console.log("round1File1");
  console.log(tester);
  var tester = "Hey";
  hello = "Hello";
  console.log(init);
  var init = 10;
  var init = 20;
  function newFunction() {
    console.log(hello);
    var hello = "Heloo";
    console.log(hello);
  }
  //   console.log(hello);
  newFunction();
}

function round1SetTimeout() {
  console.log("round1File2");

  for (let i = 0; i < 5; i++) {
    console.log("Let block");
    setTimeout(() => {
      console.log(i); // 0, 1, 2, 3, 4
    }, 1000);
  }

  const arr = [1, 2, 3, 4, 5];
  for (var i = 0; i < arr.length; i++) {
    console.log("Var block");
    setTimeout(() => {
      console.log("index", i, "el", arr[i]); // 0, 1, 2, 3, 4
    }, 1000);
  }

  const p1 = new Promise((resolve, reject) => resolve(26));
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve(27), 1000)
  );

  p1.then((res) => console.log("res1", res));
  p2.then((res) => console.log("res2", res));
}
var status = "w";

function round1This() {
  var status = "x";

  setTimeout(() => {
    console.log(this.status);
    const context2 = {
      status: "y",
      getStatus: function () {
        console.log(this.status);
      },
    };
    const context3 = {
      status: "z",
    };
    context2.getStatus(); // y
    context2.getStatus.call(context3); // z
    context2.getStatus.call(this); // x
  }, 0);
}

function round1Promise() {
  const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 1000, "First Promise resolved");
  });

  const secPromise = new Promise((res, rej) => {
    setTimeout(rej, 2000, "Second Promise rejected");
  });
  Promise.race([firstPromise, secPromise])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function round1Function() {
  console.log("round1Function");
  greetings();
  var greetings = function () {
    console.log("first Hello");
  };
  greetings();
  function greetings() {
    console.log("second Hello");
  }
  greetings();
}

function round1IIFE() {
  variable = 5;
  (() => {
    console.log("1", variable);
    variable = 10;
    console.log("2", variable);
  })();
}

function round1IIFE2() {
  variable_2 = 5;
  (() => {
    variable_3 = 25;
    console.log("variable_3", variable_3);
    var variable_3 = 10;
    variable_5 = 15;
    console.log("variable_2", variable_2);
  })();
  console.log("variable_5", variable_5);
}

function round1ArrowFn() {
  function testA() {
    const b = "Shibinlal I";
    console.log("this", this);
    return {
      b: "Shibin",
      a: () => console.log("Arrow fn", this.b),
      c: function () {
        console.log("Normal fn", this.b);
      },
    };
  }
  const x = {
    b: "Shibinlal",
    testA,
  };
  x.testA().a();
  x.testA().c();
}

export {
  round1Var,
  round1SetTimeout,
  round1This,
  round1Promise,
  round1Function,
  round1IIFE,
  round1IIFE2,
  round1ArrowFn,
};
