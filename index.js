import promiseUseCase from "./Modules/UseCases/Promise-sample.js";
import generatorFunWrapper from "./Modules/UseCases/genarator-function.js";
import prototypeInheritance from "./Modules/UseCases/prototype-inheritance.js";
import { proxyPatternSample } from "./Modules/csFundamentals/designPatterns/proxyPattern.js";
import {
  curryExampleWith2Params,
  curryExampleWithNParams,
} from "./Modules/useCases/curry-function.js";
import reducePolifillExample from "./Modules/polifills/reduce.js";
import promiseV2Utility from "./Modules/polifills/promise.js";

const moduleList = [
  generatorFunWrapper,
  promiseUseCase,
  prototypeInheritance,
  proxyPatternSample,
  curryExampleWith2Params,
  curryExampleWithNParams,
  reducePolifillExample,
  promiseV2Utility,
];

console.log("Hello World!");
document.getElementById("jsRoot").innerHTML = "Js is running!";
moduleList.forEach((module) => {
  const button = document.createElement("button");
  button.style.display = "block";
  button.style.margin = "10px";
  button.textContent = module.name;
  button.onclick = module;
  document.body.appendChild(button);
});
