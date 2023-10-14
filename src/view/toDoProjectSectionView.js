import AddProjectIcon from "./imgs/add.svg";
import RemoveProjectIcon from "./imgs/close.svg";

const isLastProjectEmpty = function isLastProjectEmpty(addProjectBtn) {
  const lastProjectElement = addProjectBtn.previousElementSibling;
  return (
    lastProjectElement &&
    lastProjectElement.querySelector(".project-selection").textContent === ""
  );
};

const createProjectsContainer = function createProjectsContainer() {
  const projectSelectionContainer = document.createElement("div");
  projectSelectionContainer.classList.add("project-selection-container");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-to-todo-btn");
  addProjectBtn.innerHTML = `<img src="${AddProjectIcon}" alt="Add project">`;
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createDeleteButtonForProject = function createDeleteButtonForProject() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.innerHTML = `<img src="${RemoveProjectIcon}" alt="Remove project">`;
  return deleteBtn;
};

const handleDeletingProject = function handleDeletingProject(
  deleteProjectBtn,
  projectContainer,
  save
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  if (isCompleted) return;
  deleteProjectBtn.addEventListener("click", () => {
    projectContainer.remove();
    save();
  });
};

const removeProjectWhenEmptyOnBlur = function removeProjectWhenEmptyOnBlur(
  newProjectContainerElement,
  newProjectSelectionElement
) {
  newProjectSelectionElement.addEventListener("blur", () => {
    if (newProjectSelectionElement.textContent === "")
      newProjectContainerElement.remove();
  });
};

const createEmptyProjectContainerElement =
  function createEmptyProjectContainerElement() {
    const newProjectContainerElement = document.createElement("div");
    newProjectContainerElement.classList.add("one-project-selection-container");
    return newProjectContainerElement;
  };

const createNewProjectSelectionElement =
  function createNewProjectSelectionElement(projectName = "") {
    const isCompleted =
      document.querySelector(".content-header .project-title").textContent ===
      "completed";
    const newProjectSelectionElement = document.createElement("div");
    newProjectSelectionElement.classList.add("project-selection");
    newProjectSelectionElement.setAttribute("contenteditable", !isCompleted);
    newProjectSelectionElement.textContent = projectName;
    return newProjectSelectionElement;
  };

const createFullProjectContainer = function createFullProjectContainer(
  save,
  projectName = ""
) {
  const projectContainer = createEmptyProjectContainerElement();
  const inputProjectElement = createNewProjectSelectionElement(projectName);
  const deleteProjectBtn = createDeleteButtonForProject();

  handleDeletingProject(deleteProjectBtn, projectContainer, save);
  removeProjectWhenEmptyOnBlur(projectContainer, inputProjectElement);
  inputProjectElement.addEventListener("blur", () => {
    save();
  });
  projectContainer.insertAdjacentElement("beforeend", inputProjectElement);
  projectContainer.insertAdjacentElement("beforeend", deleteProjectBtn);
  return projectContainer;
};

const handleAddingNewProjectToUI = function handleAddingNewProjectToUI(
  projectsContainer,
  save
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  if (isCompleted) return;
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  addProjectBtn.addEventListener("click", () => {
    if (isLastProjectEmpty(addProjectBtn)) return;

    const projectContainer = createFullProjectContainer(save);
    addProjectBtn.insertAdjacentElement("beforebegin", projectContainer);
    projectContainer.querySelector(".project-selection").focus();
  });
};

const insertProjectsToProjectContainer =
  function insertProjectsToProjectContainer(projectsContainer, projects, save) {
    if (!projects) return;
    const addProjectBtn = projectsContainer.querySelector(
      ".add-project-to-todo-btn"
    );
    projects.forEach((project) =>
      addProjectBtn.insertAdjacentElement(
        "beforebegin",
        createFullProjectContainer(save, project)
      )
    );
  };

/**
 *
 * @param {*} toDoProjects
 * @param {*} save
 * @return {HTMLElement} Projects selection container element
 */
export default function generateProjectSelectionContainer(toDoProjects, save) {
  const projectsContainer = createProjectsContainer();
  const projectsOrCurrentProject = toDoProjects ?? [
    document.querySelector(".content .project-title").textContent,
  ];
  insertProjectsToProjectContainer(
    projectsContainer,
    projectsOrCurrentProject,
    save
  );
  handleAddingNewProjectToUI(projectsContainer, save);
  return projectsContainer;
}
