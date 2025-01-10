async function promiseUtility() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 3000);
  });
  const p2 = new Promise((res, rej) => res(26));
  console.log("p2", p2);
  const p3 = () => new Promise((resolve, reject) => reject("Test error"));
  console.log("p1", p1);
  try {
    const result = await p1;
    console.log("Result:", result);
    const result2 = await p3();
    Console.log("result2:", result2);
  } catch (error) {
    console.log("Error:", error);
  }
}

export default promiseUtility;
