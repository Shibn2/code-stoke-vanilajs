import { addNewSection, addNewTab } from "./util";

const newElement = addNewSection("dom-challenge", "dom-challenge");
const newTab = addNewTab("dom-challenge", "dom-challenge", "Dom Challenge");

function closestAncestor() {
  const question = ` Implement a function to find the closest ancestor
     with the provided selector (Element.closest() method)
    `;

  const newElA = document.createElement("div");

  newElA.innerHTML = `
  <div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div id="parent2">
    <div>
      <p id="node2"></p>
    </div>
  </div>
<div>
</div>
  `;

  newElement.appendChild(newElA);

  const selector = newElA.querySelector("#parent2");
  const node2 = newElA.querySelector("#node2");
  Element.prototype.closest = function (selector) {
    let el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

  console.log(">> closest", node2.closest(selector));
}

function correspondingNode() {
  const newElA = document.createElement("div");
  newElA.innerHTML = `
    <div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div id="parent2">
    <div>
      <p id="node2">Shibin</p>
    </div>
  </div>
<div>
</div>
    `;
  const newElB = newElA.cloneNode(true);
  const node = newElA.querySelector("#node2");
  console.log(
    "node-",
    node,
    "corresponding node -",
    findCorrespondingNode(newElA, newElB, node)
  );
  function findCorrespondingNode(rootA, rootB, node) {
    if (rootA === node) return rootB;

    if (rootA.childElementCount) {
      for (let i = 0; i < rootA.childElementCount; i++) {
        const result = findCorrespondingNode(
          rootA.children[i],
          rootB.children[i],
          node
        );
        if (result) {
          return result;
        }
      }
    }
  }
  return findCorrespondingNode(newElA, newElB, node);
}

function depthOfDomTree() {
  const divn = document.createElement("div");
  divn.innerHTML = `
        <div>
            <div>
                <span id="label">Label</span>
            </div>
        </div>
    `;
  newElement.appendChild(divn);
  const el = divn.querySelector("#label");
  let depth = 0;
  function getDepthOfNode(root, targetNode) {
    if (root === targetNode) {
      return depth;
    }
    if (root.hasChildNodes()) {
      depth++;
      for (let i = 0; i < root.children.length; i++) {
        const result = getDepthOfNode(root.children[i], targetNode);
        if (result) {
          return result;
        }
      }
    }
  }
  return getDepthOfNode(divn, el);
}
function dsp() {
  //   closestAncestor();
  const node = correspondingNode();
  newElement.appendChild(node);
  console.log("depthOfDomTree()", depthOfDomTree());
  const el1 = document.createElement("span");
  el1.innerText = depthOfDomTree();
  newElement.appendChild(el1);
}

export default dsp;
