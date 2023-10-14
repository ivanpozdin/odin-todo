/**
 *
 * @param {*} handleDeleteToDo
 * @param {*} handleEditToDo
 * @param {*} handleCompleteToDo
 */
export default function handleGeneratingNewToDo(generateToDoElement) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", () => {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement();
    if (!toDoElement) return;
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    toDoElement.querySelector(".title-todo").focus();
  });
}
