function puzzles() {
  console.log("[1,2,3]+[4,5,6] = ", [1, 2, 3] + [4, 5, 6]);
  console.log("10;2", 10, 2);
  console.log(!!"");
  console.log("+!![]", +!![]);
  console.log("!!!true", !!!true);
}

function getRandomNumber(rangeStart, rangeEnd) {
  return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}

let readOnlyObj = {
  name: "shibin",
  age: "34",
};

readOnlyObj = new Proxy(readOnlyObj, {
  get: function (target, key) {
    return target[key];
  },

  set: function (target, key, value) {
    if (target.hasOwnProperty(key)) {
      throw new Error("Object properties are read-only");
    }
    target[key] = value;
  },
});

function randomFun() {
  return "key, value";
}

randomFun = new Proxy(randomFun, {
  apply(target, context, args) {
    console.log(`${target.name} is getting called at ${new Date()}`);
    return target.apply(context, args);
  },
});

const obj = {
  _mark: 0,
  set marks(val) {
    if (val < 0) throw new Error("cant set value!!");
    this._mark = val;
  },
  get marks() {
    return this._mark;
  },
};

function atlassianInterviewPblm() {
  function greet(name, ...message) {
    return message.map((m) => `Hi ${name} : ${m}`);
  }

  console.log(greet("SHibin", "Welcome", "Hi"));
  console.log(greet("Shibin2"));
  console.log(greet("shibin", "Hi"));
  console.log(greet());

  function testClosure() {
    let count = 1;
    return function () {
      return count++;
    };
  }
  const counter1 = testClosure();
  const counter2 = testClosure();
  console.log(counter1());
  console.log(counter1());
  console.log(counter2());

  console.log("start");
  setTimeout(() => {}, 0);

  Promise.resolve();
}

function puzzleUtil() {
  // console.log("<><><> Random number bw 20 and 30", getRandomNumber(20, 30));
  // console.log("sum>>", sum(1)(2)(3)(4)());
  // console.log("randomFun>>", randomFun());
  // console.log(">>>>>readOnlyObj", (readOnlyObj["name"] = "Hima"));
  // console.log(">>>>>>>>>> obj set", (obj.marks = -90));
  atlassianInterviewPblm();
}

export { puzzles, puzzleUtil };
