import generateToDoElement from "./toDoView.js";
export default function generateAllToDosInProject(
  projectName,
  todos,
  handleDeleteToDo,
  handleEditToDo,
  handleCompleteToDo
) {
  const deleteProjectBtn = document.querySelector(
    ".content-header>.delete-project-btn"
  );
  if (
    ["anytime", "inbox", "someday", "today", "completed"].includes(projectName)
  ) {
    deleteProjectBtn.classList.add("hidden");
  } else {
    deleteProjectBtn.classList.remove("hidden");
  }
  document.querySelector(".project-title").textContent = projectName;
  const toDoListElement = document.querySelector(".todo-list");
  toDoListElement.innerHTML = "";
  if (!todos) return;
  todos.forEach((todo) => {
    const toDoElement = generateToDoElement(
      todo,
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
    toDoListElement.insertAdjacentElement("beforeend", toDoElement);
  });
}
