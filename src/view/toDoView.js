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

const handleAddingNewProjects = function (projectsContainer, projects = []) {
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

export default function generateToDoElement(
  todo = null,
  handleDeleteToDo = (id) => {}
) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  const titleDescriptionControlsHtml =
    generateToDoTitleDescriptionAndControlsHtml(todo);
  toDoContainer.insertAdjacentHTML("afterbegin", titleDescriptionControlsHtml);
  if (todo?.date) {
    toDoContainer.querySelector('input[type="date"]').valueAsDate = todo.date;
  }
  toDoContainer
    .querySelector(".projects-btn")
    .addEventListener("click", (e) => {
      const projectEnterHtml = `
      <div 
        class="projects-todo" 
        contenteditable="true" 
        data-placeholder="projects..."
        >
      </div>
      `;
      toDoContainer
        .querySelector(".description-todo")
        .insertAdjacentHTML("afterend", projectEnterHtml);
    });

  toDoContainer.querySelector(".projects-btn").addEventListener("click", () => {
    const projectsContainer = createProjectsContainer();

    toDoContainer.insertAdjacentElement("beforeend", projectsContainer);
    insertProjectsToProjectContainer(projectsContainer, todo?.projects);
    handleAddingNewProjects(projectsContainer);
  });
  toDoContainer
    .querySelector(".remove-todo-btn")
    .addEventListener("click", () => {
      handleDeleteToDo(toDoContainer.dataset.id);
      toDoContainer.remove();
    });

  return toDoContainer;
}
