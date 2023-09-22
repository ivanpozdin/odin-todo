const createProjectsContainer = function () {
  const projectSelectionContainer = document.createElement("div");
  projectSelectionContainer.classList.add("project-selection-container");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-to-todo-btn");
  addProjectBtn.innerText = "➕";
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createEmptyProjectContainerElement = function () {
  const newProjectContainerElement = document.createElement("div");
  newProjectContainerElement.classList.add("one-project-selection-container");
  return newProjectContainerElement;
};

const createNewProjectSelectionElement = function (projectName = "") {
  const newProjectSelectionElement = document.createElement("div");
  newProjectSelectionElement.classList.add("project-selection");
  newProjectSelectionElement.setAttribute("contenteditable", "true");
  newProjectSelectionElement.textContent = projectName;
  return newProjectSelectionElement;
};

const createDeleteButtonForProject = function () {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.textContent = "x";
  return deleteBtn;
};

const removeProjectWhenEmptyOnBlur = function (
  newProjectContainerElement,
  newProjectSelectionElement
) {
  newProjectSelectionElement.addEventListener("blur", () => {
    if (newProjectSelectionElement.textContent === "")
      newProjectContainerElement.remove();
  });
};

const isLastProjectEmpty = function (addProjectBtn) {
  const lastProjectElement = addProjectBtn.previousElementSibling;
  return (
    lastProjectElement &&
    lastProjectElement.querySelector(".project-selection").textContent === ""
  );
};

const handleDeletingProject = function (deleteProjectBtn, projectContainer) {
  deleteProjectBtn.addEventListener("click", () => {
    projectContainer.remove();
  });
};

const createFullProjectContainer = function (projectName = "") {
  const projectContainer = createEmptyProjectContainerElement();
  const inputProjectElement = createNewProjectSelectionElement(projectName);
  const deleteProjectBtn = createDeleteButtonForProject();

  handleDeletingProject(deleteProjectBtn, projectContainer);
  removeProjectWhenEmptyOnBlur(projectContainer, inputProjectElement);

  projectContainer.insertAdjacentElement("beforeend", inputProjectElement);
  projectContainer.insertAdjacentElement("beforeend", deleteProjectBtn);
  return projectContainer;
};

const handleAddingNewProjectToUI = function (projectsContainer, projects = []) {
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  addProjectBtn.addEventListener("click", () => {
    if (isLastProjectEmpty(addProjectBtn)) return;

    const projectContainer = createFullProjectContainer();
    addProjectBtn.insertAdjacentElement("beforebegin", projectContainer);
    projectContainer.querySelector(".project-selection").focus();
  });
};

const generateToDoTitleDescriptionAndControlsHtml = function (todo) {
  const toDoHtml = `
  <input type="checkbox" class="complete-todo-btn" />
  <h3 class="title-todo" contenteditable="true" data-placeholder="title">${
    todo ? todo.title : ""
  }</h3>
  <div class="description-todo" contenteditable="true" data-placeholder="description...">${
    todo ? todo.description : ""
  }</div>
  <button class="save-to-do-btn">💾</button>
  <div class="todo-controls-container">
    <input type="date" value="" />
    <button class="projects-btn todo-controls">🏷️</button>
    <button class="remove-todo-btn todo-controls">🗑️</button>
  </div>
`;
  return toDoHtml;
};

const insertProjectsToProjectContainer = function (
  projectsContainer,
  projects
) {
  if (!projects) return;
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  projects.forEach((project) =>
    addProjectBtn.insertAdjacentElement(
      "beforebegin",
      createFullProjectContainer(project)
    )
  );
};

const getProjects = function (existingProjects, toDoElement) {
  if (!document.querySelector(".project-selection-container")) {
    return existingProjects;
  }
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

const doOnSaveBtn = function (toDoContainer, todo, handleEditToDo) {
  const saveToDoBtn = toDoContainer.querySelector(".save-to-do-btn");
  saveToDoBtn.addEventListener("click", function () {
    const [titleElement, descriptionElement] = [
      toDoContainer.querySelector(".title-todo"),
      toDoContainer.querySelector(".description-todo"),
    ];
    const projects = getProjects(todo?.projects ?? [], toDoContainer);
    const date = getDate(toDoContainer);
    handleEditToDo(
      toDoContainer.dataset.id,
      titleElement.textContent,
      descriptionElement.textContent,
      projects,
      date
    );
  });
};

const doOnDeleteBtn = function (toDoContainer, handleDeleteToDo) {
  toDoContainer
    .querySelector(".remove-todo-btn")
    .addEventListener("click", () => {
      handleDeleteToDo(toDoContainer.dataset.id);
      toDoContainer.remove();
    });
};

const doOnShowProjects = function (toDoContainer, toDoProjects) {
  toDoContainer.querySelector(".projects-btn").addEventListener("click", () => {
    console.log("hi!");
    const existingProjectsContainer = toDoContainer.querySelector(
      ".project-selection-container"
    );
    if (existingProjectsContainer) {
      existingProjectsContainer.remove();
      return;
    }
    const projectsContainer = createProjectsContainer();

    toDoContainer.insertAdjacentElement("beforeend", projectsContainer);
    insertProjectsToProjectContainer(projectsContainer, toDoProjects);
    handleAddingNewProjectToUI(projectsContainer);
  });
};

const createToDoContainer = function (todo) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  const titleDescriptionControlsHtml =
    generateToDoTitleDescriptionAndControlsHtml(todo);
  toDoContainer.insertAdjacentHTML("afterbegin", titleDescriptionControlsHtml);
  if (todo?.date) {
    toDoContainer.querySelector('input[type="date"]').valueAsDate = todo.date;
  }
  return toDoContainer;
};

export default function generateToDoElement(
  todo = null,
  handleDeleteToDo,
  handleEditToDo
) {
  const toDoContainer = createToDoContainer(todo);
  doOnShowProjects(toDoContainer, todo?.projects ?? []);
  doOnDeleteBtn(toDoContainer, handleDeleteToDo);
  doOnSaveBtn(toDoContainer, todo, handleEditToDo);

  return toDoContainer;
}
