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
