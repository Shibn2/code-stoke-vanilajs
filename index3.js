import { createWorker } from "./Modules/useCases/webworker.js";

if (window.Worker) {
  const worker = new Worker("./Modules/useCases/webworker.js");
  worker.postMessage("Hello World");
  worker.onmessage = (e) => {
    console.log(e.data);
  };
  worker.terminate();
}
