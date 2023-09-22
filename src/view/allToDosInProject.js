import generateToDoElement from "./toDoView.js";
export default function generateAllToDosInProject(
  projectName,
  todos,
  handleDeleteToDo,
  handleEditToDo = () => {}
) {
  document.querySelector(".project-title").textContent = projectName;
  const toDoListElement = document.querySelector(".todo-list");
  toDoListElement.innerHTML = "";
  if (!todos) return;
  todos.forEach((todo) => {
    const toDoElement = generateToDoElement(
      todo,
      handleDeleteToDo,
      handleEditToDo
    );
    toDoListElement.insertAdjacentElement("beforeend", toDoElement);
  });
}
