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

class PromiseV3 {
  constructor(executor) {
    this.value;
    this.rejectReason;
    this.onResolve;
    this.onReject;
    this.state = "pending";
    this.called = false;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    try {
      console.log("constructor hit");
      executor(this.resolve, this.reject);
    } catch (err) {
      console.log("Error from constructor", err);
    }
  }
  resolve(value) {
    if (this.state !== "pending") return;
    this.value = value;
    this.state = "fullfilled";
    if (typeof this.onResolve === "function" && !this.called) {
      this.onResolve(this.value);
      this.called = true;
    }
  }
  reject(value) {
    if (this.state !== "pending") return;
    this.value = value;
    this.state = "rejected";
    if (!this.called && typeof this.onReject === "function") {
      this.onReject(this.value);
      this.called = true;
    }
  }
  then(onFullfilled) {
    this.onResolve = onFullfilled;
    if (!this.called && this.state === "fullfilled") {
      console.log("Called from then bloc");
      this.onResolve(this.value);
      this.called = true;
    }
    return this;
  }
  catch(onReject) {
    this.onReject = onReject;
    if (!this.called && this.state === "rejected") {
      this.onReject(this.value);
      this.called = true;
    }
    return this;
  }
}

async function promiseV3Utility() {
  console.log("hit");
  const p1 = () =>
    new PromiseV3((res, rej) =>
      setTimeout(() => res("Post submitted!!!"), 1000)
    );

  const p2 = () => new PromiseV3((res, rej) => res("Post translated"));

  const p3 = () =>
    new PromiseV3((res, rej) => setTimeout(rej("Server error!!!")));

  const p4 = () =>
    new PromiseV3((res, rej) => rej("Server internal execution error"));

  const res1 = await p1();
  console.log("res1", res1);
  const res2 = await p2();
  console.log("res2", res2);
  const res3 = await p3();
  console.log("res3", res3);
  const res4 = await p4();
  console.log("res4", res4);
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

export { promiseV2Utility, promiseV3Utility };
