import TrashIcon from "./imgs/trash.svg";
import ProjectsIcon from "./imgs/projects.svg";
import generateProjectSelectionContainer from "./toDoProjectSectionView.js";
import HideIcon from "./imgs/hide-details.svg";
import ShowIcon from "./imgs/show-details.svg";

const generateToDoHeaderHtml = function generateToDoHeaderHtml(
  todo,
  isCompleted
) {
  const toDoHtml = `
  <input type="checkbox" ${
    isCompleted ? "checked" : ""
  } class="complete-todo-checkbox" />
  <h3 class="title-todo" contenteditable="${!isCompleted}" data-placeholder="title" data-is-hidden="${Boolean(
    todo
  )}">${todo ? todo.title : ""}</h3>
  <button class="view-details-btn"><img src="${
    todo ? ShowIcon : HideIcon
  }" alt="${todo ? "Show Details" : "Hide details"}"></button>
`;
  return toDoHtml;
};

const getProjects = function getProjects(toDoElement) {
  if (!document.querySelector(".project-selection-container")) {
    return null;
  }
  const projectElements = [
    ...toDoElement.getElementsByClassName("project-selection"),
  ];

  const projectNames = projectElements.map(
    (projectElement) => projectElement.textContent
  );
  return projectNames;
};

const getDate = function getDate(dateControl) {
  let date = null;
  if (dateControl?.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

const saveOnBlurOrInput = function saveOnBlur(todoElements, save) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  const titleElement = toDoContainer.querySelector(".title-todo");

  [titleElement, descriptionElement].forEach((element) => {
    element.addEventListener("blur", () => {
      save();
    });
    const elementCopy = element;
    elementCopy.addEventListener("input", () => {
      if (elementCopy.textContent === "") {
        elementCopy.innerHTML = "";
      }
      save();
    });
  });

  const dateControl = controlsElement.querySelector('input[type="date"]');
  dateControl.addEventListener("change", () => {
    save();
  });
};

const saveToDo = function saveToDo(toDoContainer, handlers) {
  const [titleElement, descriptionElement] = [
    toDoContainer.querySelector(".title-todo"),
    toDoContainer.querySelector(".description-todo"),
  ];
  if (titleElement.textContent.trim() === "") {
    return;
  }
  const editedToDo = { title: titleElement.textContent };
  if (descriptionElement) {
    editedToDo.description = descriptionElement.textContent;
  }
  if (toDoContainer.dataset.id) {
    editedToDo.id = toDoContainer.dataset.id;
  }
  const projects = getProjects(toDoContainer);
  if (projects !== null) {
    editedToDo.projects = projects;
  }
  const dateInput = toDoContainer.querySelector('input[type="date"]');
  if (dateInput) {
    editedToDo.date = getDate(dateInput);
  }
  const newId = handlers.handleEditToDo(editedToDo);
  const toDoContainerCopy = toDoContainer;
  toDoContainerCopy.dataset.id = newId;
};

const createToDoContainer = function createToDoContainer(
  todo,
  isCompleted,
  descriptionElement,
  controlsElement
) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  toDoContainer.dataset.isHidden = Boolean(todo);
  const toDoHeaderHtml = generateToDoHeaderHtml(todo, isCompleted);
  toDoContainer.insertAdjacentHTML("afterbegin", toDoHeaderHtml);

  const title = toDoContainer.querySelector(".title-todo");
  title.addEventListener("input", () => {
    if (title.textContent === "") {
      title.innerHTML = "";
    }
  });

  if (!todo) {
    toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
    toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  }

  return toDoContainer;
};

const doOnCompleteToDo = function doOnCompleteToDo(toDoContainer, handlers) {
  const checkbox = toDoContainer.querySelector(".complete-todo-checkbox");
  checkbox.addEventListener("click", () => {
    if (!toDoContainer.dataset.id) {
      toDoContainer.remove();
      return;
    }
    handlers.handleCompleteToDo(toDoContainer.dataset.id);
  });
};

const generateDescriptionElement = function generateDescriptionElement(toDo) {
  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description-todo");
  const projectTitle = document.querySelector(
    ".content h2.project-title"
  ).textContent;
  if (projectTitle !== "completed") {
    descriptionElement.setAttribute("contenteditable", "true");
  }
  descriptionElement.dataset.placeholder = "description...";
  descriptionElement.textContent = toDo ? toDo.description : "";

  descriptionElement.addEventListener("input", () => {
    if (descriptionElement.textContent === "") {
      descriptionElement.innerHTML = "";
    }
  });

  return descriptionElement;
};

const generateControlsElement = function generateControlsElement(
  toDo,
  handlers
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  const controls = document.createElement("div");
  controls.classList.add("todo-controls-container");
  const controlsInnerHtml = `
  <input type="date" value="" ${isCompleted ? "readonly" : ""}/>
    <button class="projects-btn todo-controls">
      <img src="${ProjectsIcon}" alt="Show projects">
    </button>
    <button class="remove-todo-btn todo-controls">
      <img src="${TrashIcon}" alt="Delete to-do">
    </button>
  `;
  controls.insertAdjacentHTML("afterbegin", controlsInnerHtml);

  const dateInput = controls.querySelector('input[type="date"]');
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  if (projectTitle === "today" || projectTitle === "someday") {
    dateInput.valueAsDate = new Date();
  }
  if (toDo?.date) {
    dateInput.valueAsDate = new Date(toDo.date);
  }

  controls.querySelector(".remove-todo-btn")?.addEventListener("click", () => {
    const toDoContainer = controls.closest("li.todo");
    if (!toDoContainer) return;
    handlers.handleDeleteToDo(toDoContainer.dataset.id, handlers);
    toDoContainer.remove();
  });

  return controls;
};

const showDetails = function showDetails(todoElements) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  if (toDoContainer.dataset.isHidden !== "true") return;
  toDoContainer.querySelector(".view-details-btn img").src = HideIcon;
  toDoContainer.dataset.isHidden = "false";
  toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
  toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  descriptionElement.focus();
};

const hideDetails = function hideDetails(todoElements, save) {
  const {
    toDoContainer,
    descriptionElement,
    controlsElement,
    projectsElement,
  } = todoElements;
  save();
  toDoContainer.dataset.isHidden = "true";
  toDoContainer.querySelector(".view-details-btn img").src = ShowIcon;
  [descriptionElement, controlsElement, projectsElement].forEach((element) =>
    element.remove()
  );
  const existingProjectsContainer = toDoContainer.querySelector(
    ".project-selection-container"
  );
  if (existingProjectsContainer) {
    existingProjectsContainer.remove();
  }
};

const doOnShowOrHideDetails = function doOnShowOrHideDetails(
  todoElements,
  save
) {
  const { toDoContainer } = todoElements;
  const showHideBtn = toDoContainer.querySelector(".view-details-btn");
  showHideBtn.addEventListener("click", () => {
    if (toDoContainer.dataset.isHidden === "true") {
      showDetails(todoElements);
      return;
    }
    hideDetails(todoElements, save);
  });
  toDoContainer
    .querySelector(".title-todo")
    .addEventListener("dblclick", () => {
      showDetails(todoElements);
    });
};

const doOnShowProjects = function doOnShowProjects(todoElements, save) {
  const { toDoContainer, controlsElement, projectsElement } = todoElements;
  const showProjectsBtn = controlsElement.querySelector(".projects-btn");
  showProjectsBtn.addEventListener("click", () => {
    if (toDoContainer.querySelector(".project-selection-container")) {
      save();
      projectsElement.remove();
    } else {
      toDoContainer.insertAdjacentElement("beforeend", projectsElement);
    }
  });
};

/**
 *
 * @param {*} todo
 * @param {*} handleDeleteToDo
 * @param {*} handleEditToDo
 * @param {*} handleCompleteToDo
 * @return {HTMLElement?} To-Do Container element
 *
 */
export default function generateToDoElement(handlers, todo = null) {
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  const isCompleted = projectTitle === "completed";
  if (isCompleted && !todo) return null;
  const descriptionElement = generateDescriptionElement(todo);
  const controlsElement = generateControlsElement(todo, handlers);
  const toDoContainer = createToDoContainer(
    todo,
    isCompleted,
    descriptionElement,
    controlsElement
  );
  const save = saveToDo.bind(null, toDoContainer, handlers);
  const todoElements = {
    toDoContainer,
    descriptionElement,
    controlsElement,
    projectsElement: generateProjectSelectionContainer(todo?.projects, save),
  };
  doOnCompleteToDo(toDoContainer, handlers);
  doOnShowOrHideDetails(todoElements, save);
  doOnShowProjects(todoElements, save);
  saveOnBlurOrInput(todoElements, save);

  return toDoContainer;
}
