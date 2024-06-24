console.log("Hello World! from index2.js");
const root = document.getElementById("jsRoot2");
const app2 = root.querySelector("#app2");

const parent = app2.querySelector(".parent");
const child1 = parent.querySelector(".child1");
const child1Btn = child1.querySelector(".child1");
const child12Btn = child1.querySelector(".child12");
const child2 = child1.querySelector(".child2");
const child2Btn = child2.querySelector(".child2");

// Attach events from inner to outer

child2Btn.addEventListener("click", (e) => {
  console.log("child2Btn clicked");
  child2Btn.style.backgroundColor = "green";
  e.stopPropagation();
  // e.stopImmediatePropagation();
});
child2Btn.addEventListener("click", (e) => {
  console.log("child2Btn from another event clicked");
  child2Btn.style.backgroundColor = "green";
  e.stopPropagation();
});

child2.addEventListener("click", (e) => {
  console.log("child2 div is clicked");
  child2.style.backgroundColor = "blue";
  //   e.stopPropagation();
});

child12Btn.addEventListener("click", (e) => {
  console.log("child12Btn clicked");
  child12Btn.style.backgroundColor = "black";
  //   e.stopPropagation();
});
child1Btn.addEventListener("click", (e) => {
  console.log("child1Btn clicked");
  child1Btn.style.backgroundColor = "yellow";
  //   e.stopPropagation();
});

child1.addEventListener("click", (e) => {
  console.log("child1 div clicked");
  child1.style.backgroundColor = "#1f3820";
  //   e.stopPropagation();
});

parent.addEventListener("click", (e) => {
  console.log("parent div clicked");
  parent.style.backgroundColor = "#af4caf";
  //   e.stopPropagation();
});

document.addEventListener("click", (e) => {
  console.log("document clicked");
  //   e.stopPropagation();
});
