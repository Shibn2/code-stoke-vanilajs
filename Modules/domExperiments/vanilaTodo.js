import { addNewSection, addNewTab } from "./util";

function debaounce(callback, timer) {
  let timeout;
  return function () {
    console.log("Debounce inner fn");
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, ...arguments);
    }, timer);
  };
}

function throttle(callback, delay) {
  let stopExe = false;
  return function () {
    if (!stopExe) {
      stopExe = true;
      setTimeout(() => {
        callback.call(this, ...arguments);
        stopExe = false;
      }, delay);
    }
  };
}

function VanilaTodoFetch() {
  const tab = addNewTab(null, null, "Vanilla Todo Fetch");
  const section = addNewSection(null, null);
  let userTodo;
  let todoMarkup;
  //displayTodoList implementation

  function displayTodoList() {
    const todoListParent = document.createElement("ul");
    todoListParent.classList.add("todo-list");
    for (const userId in userTodo) {
      const newListItem = document.createElement("li");
      newListItem.classList.add("todo-item");
      newListItem.innerHTML = `
            <p class="todo-user">${userId}</p>
        `;
      const todoList = userTodo[userId];
      for (const todo of todoList) {
        const newTodoCard = document.createElement("div");
        newTodoCard.classList.add("todo-card");
        newTodoCard.innerHTML = `
                <div>${todo.todo}</div>
                <div style="background-color:${
                  todo.completed ? "green" : "red"
                }">${todo.completed ? "Done" : "Not completed"}
            </div>`;
        newListItem.appendChild(newTodoCard);
      }
      todoListParent.appendChild(newListItem);
    }
    return todoListParent;
  }

  // Process Data
  function processData(todos) {
    const userData = {};
    todos.forEach((todo) => {
      if (!(todo.userId in userData)) {
        userData[todo.userId] = [];
      }
      userData[todo.userId].push(todo);
    });
    return userData;
  }

  // Button click handler
  const handleButtonClick = async () => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    console.log("handler---");
    try {
      const response = await fetch(
        "https://dummyjson.com/todos?limit=10&skip=80.",
        { signal }
      );
      const data = await response.json();
      console.log("data>>>", data);
      userTodo = processData(data.todos);
      todoMarkup = displayTodoList();
      // Display todo list
      section.appendChild(todoMarkup);
    } catch (err) {
      console.error(err);
    }
    // abortController.abort();
  };
  // create button
  const btn = document.createElement("button");
  btn.classList.add("fetch-btn");
  btn.innerText = "Fetch Data";
  // add event listener
  btn.addEventListener("click", throttle(handleButtonClick, 2000));
  section.appendChild(btn);
}

export default VanilaTodoFetch;
