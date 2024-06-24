self.onmessage = function (e) {
  console.log("Worker premises...");
  console.log(e.data);

  self.postMessage("Hi, from worker!");
};
