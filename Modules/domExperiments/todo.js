import { addNewSection, addNewTab } from "./util";

function todoVanilla() {
  const tab = addNewTab(null, null, "Vanilla Todo Fetch");
  const section = addNewSection(null, null);

  const container = document.createElement("div");
  container.innerHTML = `
        <main class="todo-vanila">
        <section class="left-panel">
        <label> Todo: <input class="input-field"/></label>
        <button class="submit-btn">Add Todo</button>
        </section>
        <section class="right-panel">
        <span>Todo's</span>
        <ul class="list-section">
        </ul>
        </section>
        </main>
    `;

  section.appendChild(container);

  const submitBtn = document.querySelector(".submit-btn");
  const inputField = document.querySelector(".input-field");
  const listSection = document.querySelector(".list-section");

  let todos = [];
  let currentTodo = "";

  //Dom update
  function addToList() {
    const totalTodo = todos.length;
    const lastEl = todos[totalTodo - 1];
    const newTodo = document.createElement("li");
    newTodo.id = `todoItem${totalTodo - 1}`;
    newTodo.innerHTML = `
        <span>${lastEl}<span>
        <button class="complete-button-${totalTodo}">Completed</button>
    `;
    listSection.appendChild(newTodo);

    const completeBtn = document.querySelector(`.complete-button-${totalTodo}`);
    completeBtn.addEventListener("click", (e) =>
      doneClikHandler(e, totalTodo - 1, lastEl)
    );
  }

  //Delete from list
  function deleteNode(index) {
    const targetEl = document.querySelector(`#todoItem${index}`);
    targetEl.remove();
  }
  // change handler
  function changeHandler(e) {
    if (e.target.value) {
      currentTodo = e.target.value;
    }
  }

  // submit click handler
  function submitClickHandler() {
    if (currentTodo.length) {
      if (!todos.includes(currentTodo)) {
        todos.push(currentTodo);
        addToList();
      } else {
        console.error("Todo alrady exists!!");
      }
    }
  }

  // done btn click handler
  function doneClikHandler(e, index, todoValue) {
    todos = todos.filter((todo) => todo != todoValue);
    deleteNode(index);
  }

  inputField.addEventListener("change", changeHandler);
  submitBtn.addEventListener("click", submitClickHandler);
}

export default todoVanilla;
