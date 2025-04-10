function addNewSection(customeClass, customId) {
  const newElement = document.createElement("section");
  newElement.classList.add("content");
  const contentList = document.querySelectorAll(".content");

  newElement.setAttribute("data-content", contentList.length + 1);

  if (customeClass) {
    newElement.classList.add(customeClass);
  }
  if (customId) {
    newElement.id = customId;
  }

  document.body.appendChild(newElement);

  return newElement;
}

function addNewTab(customeClass, customId, btnName) {
  const newElement = document.createElement("button");
  const tabList = document.querySelectorAll(".tab");
  newElement.classList.add("tab");
  newElement.innerText = btnName;
  newElement.setAttribute("data-tab", tabList.length + 1);

  if (customeClass) {
    newElement.classList.add(customeClass);
  }
  if (customId) {
    newElement.id = customId;
  }
  const head = document.querySelector("header");
  head.appendChild(newElement);

  return newElement;
}

export { addNewSection, addNewTab };
