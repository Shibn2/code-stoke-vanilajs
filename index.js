import promiseUseCase from "./Modules/UseCases/Promise-sample.js";
import generatorFunWrapper from "./Modules/UseCases/genarator-function.js";
import prototypeInheritance, {
  jsOOPStudyExample1,
  jsOOPStudyExample2,
  piPractice,
} from "./Modules/UseCases/prototype-inheritance.js";
import { proxyPatternSample } from "./Modules/csFundamentals/designPatterns/proxyPattern.js";
import {
  curryExampleWith2Params,
  curryExampleWithNParams,
} from "./Modules/useCases/curry-function.js";
import reducePolifillExample from "./Modules/polifills/reduce.js";
import {
  promiseV2Utility,
  promiseV3Utility,
} from "./Modules/polifills/promise.js";
import { throttle } from "./Modules/useCases/throttle.js";
import {
  debounceWithImmediete,
  debounce,
} from "./Modules/useCases/debounce.js";
import bindSample from "./Modules/polifills/bind.js";
import callSample from "./Modules/polifills/call.js";
import composePipeSample from "./Modules/useCases/compose-pipe.js";
import {
  round1ArrowFn,
  round1Function,
  round1IIFE,
  round1IIFE2,
  round1Promise,
  round1SetTimeout,
  round1This,
  round1Var,
} from "./Modules/roundOne/file1.js";
import { typesExample } from "./Modules/useCases/types.js";
import { puzzles, puzzleUtil } from "./Modules/useCases/puzzles.js";
import {
  objectCreateExample,
  protoTypeClassExample,
  prototypeFunctionExample,
} from "./Modules/useCases/prototype-inheritance2.js";
import memoizeUtility from "./Modules/polifills/memoise.js";
import {
  roundOne2Utility,
  round1UtilityFile2,
} from "./Modules/roundOne/file2.js";
import promiseUtility from "./Modules/useCases/Promise-playground.js";
import deepCloneUtility from "./Modules/useCases/deep-clone.js";
import {
  mergeSortHandler,
  quickSortByMedianPivotHandler,
  quickSortHandler,
} from "./Modules/csFundamentals/sort/sort.js";
import { VariablesStudy } from "./Modules/roundOne/file3.js";
import sleepUtil from "./Modules/useCases/sleep.js";

const moduleList = [
  "Use case / general concepts",
  generatorFunWrapper,
  promiseUseCase,
  prototypeInheritance,
  prototypeFunctionExample,
  protoTypeClassExample,
  objectCreateExample,
  jsOOPStudyExample1,
  jsOOPStudyExample2,
  piPractice,
  proxyPatternSample,
  curryExampleWith2Params,
  curryExampleWithNParams,
  reducePolifillExample,
  promiseV2Utility,
  promiseV3Utility,
  bindSample,
  callSample,
  composePipeSample,
  "First round problem list",
  round1Var,
  round1SetTimeout,
  round1This,
  round1Promise,
  round1Function,
  round1IIFE2,
  round1IIFE,
  round1ArrowFn,
  typesExample,
  puzzles,
  memoizeUtility,
  roundOne2Utility,
  round1UtilityFile2,
  promiseUtility,
  deepCloneUtility,
  VariablesStudy,
  sleepUtil,
  puzzleUtil,
  // throttle,
  // debaounceWithImmediete,
  // debaounce,
  "Sorting problems",
  quickSortHandler,
  quickSortByMedianPivotHandler,
  mergeSortHandler,
];

console.log("Hello World!");
document.getElementById("jsRoot").innerHTML = "Js is running!";
moduleList.forEach((module) => {
  if (typeof module === "function") {
    const button = document.createElement("button");
    button.style.display = "block";
    button.style.margin = "10px";
    button.textContent = module.name;
    button.onclick = module;
    document.body.appendChild(button);
  } else if (typeof module === "string") {
    const seperatorAndTitle = document.createElement("h3");
    seperatorAndTitle.textContent = module;
    seperatorAndTitle.style.margin = "10px";
    seperatorAndTitle.style.color = "red";
    document.body.appendChild(seperatorAndTitle);
  }
});

const seperatorAndTitle = document.createElement("h3");
seperatorAndTitle.textContent = "Debounce and throttle";
seperatorAndTitle.style.margin = "10px";
seperatorAndTitle.style.color = "red";
document.body.appendChild(seperatorAndTitle);
const button = document.createElement("button");
button.style.display = "block";
button.style.margin = "10px";
button.textContent = "Debounce";
button.onclick = debounce(() => console.log("debounce clicked!!!"), 1000);
document.body.appendChild(button);

const buttonThrottle = document.createElement("button");
buttonThrottle.style.display = "block";
buttonThrottle.style.margin = "10px";
buttonThrottle.textContent = "Throttle";
buttonThrottle.onclick = throttle(
  () => console.log("throttle clicked!!!"),
  3000
);
document.body.appendChild(buttonThrottle);
