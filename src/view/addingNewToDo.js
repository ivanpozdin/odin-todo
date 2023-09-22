import generateToDoElement from "./toDoView.js";

export default function handleGeneratingNewToDo(
  handleDeleteToDo,
  handleEditToDo
) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", function () {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement(
      null,
      handleDeleteToDo,
      handleEditToDo
    );
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    toDoElement.querySelector(".title-todo").focus();
  });
}
