function singletonePattern() {
  let instance = null;
  function createInstance() {
    return {
      name: "Code Stoke",
      age: 25,
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}

let instance = null;
class SingletonePatter {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }
  getInstance() {
    return instance;
  }
}

// Version 3

let instancev3 = null;

class Singleton2 {
  static count = 0;
  // constructor() {
  //   if (!instancev3) {
  //     instancev3 = this;
  //   }
  //   return instancev3;
  // }
  increment() {
    Singleton2.count++;
  }
  getCount() {
    return Singleton2.count;
  }
}

// Using a regular js object this can be achieved.
let count = 0;
const counter = {
  increment: function () {
    count++;
    return count;
  },
  decrement: function () {
    count--;
    return count;
  },
};

Object.freeze(counter);

export default SingletonePatter;
export { singletonePattern };
export { counter };
