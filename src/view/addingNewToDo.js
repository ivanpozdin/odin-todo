import generateToDoElement from "./toDoView.js";

/**
 *
 * @param {*} handleDeleteToDo
 * @param {*} handleEditToDo
 * @param {*} handleCompleteToDo
 */
export default function handleGeneratingNewToDo(handlers) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", () => {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement(null, handlers);
    if (!toDoElement) return;
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    toDoElement.querySelector(".title-todo").focus();
  });
}
