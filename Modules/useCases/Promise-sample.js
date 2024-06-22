function promiseUseCase() {
  console.log("promiseUseCase started");
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  const promise3 = new Promise((resolve, reject) => reject("Test error"));
  const promise2 = 26;

  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  Promise.allSettled([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });

  Promise.any([promise1, promise2, promise3]).then((val) => {
    console.log("Promise.any resolved", val);
  });

  Promise.race([promise1, promise2, promise3]).then((val) => {
    console.log("Promise.race", val);
  });
}

export default promiseUseCase;
