class PromiseV2 {
  constructor(callback) {
    this.onResolve = null;
    this.onReject = null;
    this.Called = false;
    this.value = null;
    this.reason = null;
    callback(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    this.value = value;
    if (typeof this.onResolve === "function" && !this.called) {
      this.onResolve(value);
      this.called = true;
    }
  }
  reject(value) {
    this.reason = value;
    if (typeof this.onReject === "function" && !this.called) {
      this.onReject(value);
      this.called = true;
    }
  }
  then(callback) {
    this.onResolve = callback;
    if (!this.called && this.value) {
      this.called = true;
      this.onResolve(this.value);
    }
  }
  catch(callback) {
    this.onReject = callback;
    if (!this.called && this.reason) {
      this.called = true;
      this.onReject(this.reason);
    }
  }
}

// const p1 = new PromiseV2((resolve, reject)=>resolve(26));
// will get called immediately, inside then
// resolve() -> then() -> callback()

// const p2 = new PromiseV2((resolve, reject)=>setTimeout(()=>resolve(27), 1000));
// will get called after 1 sec, inside resolve
// then() -> resolve() -> callback()

function promiseV2Utility() {
  const p1 = new PromiseV2((resolve, reject) => resolve(26));
  p1.then((value) => console.log("Promise 1 resolved with value:", value));
  const p2 = new PromiseV2((resolve, reject) =>
    setTimeout(() => resolve(27), 1000)
  );
  p2.then((value) => console.log("Promise 2 resolved with value:", value));
}

export default promiseV2Utility;
