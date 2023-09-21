import generateToDoElement from "./toDoView.js";

const getProjects = function (toDoElement) {
  const projectElements = [
    ...toDoElement.getElementsByClassName("project-selection"),
  ];

  const projectNames = projectElements.map(
    (projectElement) => projectElement.textContent
  );
  return projectNames;
};

const getDate = function (toDoElement) {
  const dateControl = toDoElement.querySelector('input[type="date"]');
  let date = null;
  if (dateControl.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

export default function handleGeneratingNewToDo(
  handler,
  handleDeleteToDo = () => {}
) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", function () {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement();
    const [titleElement, descriptionElement] = [
      toDoElement.querySelector(".title-todo"),
      toDoElement.querySelector(".description-todo"),
    ];
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    titleElement.focus();

    const saveToDoBtn = toDoElement.querySelector(".save-to-do-btn");
    saveToDoBtn.addEventListener("click", function () {
      if (
        titleElement.textContent === "" &&
        descriptionElement.textContent === ""
      ) {
        toDoElement.remove();
      }
      const projects = getProjects(toDoElement) ?? [];
      const date = getDate(toDoElement);
      handler(
        titleElement.textContent,
        descriptionElement.textContent,
        projects,
        date
      );
    });
  });
}
