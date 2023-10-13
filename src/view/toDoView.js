import TrashIcon from "./imgs/trash.svg";
import ProjectsIcon from "./imgs/projects.svg";
import generateProjectSelectionContainer from "./toDoProjectSectionView.js";
import HideIcon from "./imgs/hide-details.svg";
import ShowIcon from "./imgs/show-details.svg";

const generateToDoHeaderHtml = function (todo, isCompleted) {
  const toDoHtml = `
  <input type="checkbox" ${
    isCompleted ? "checked" : ""
  } class="complete-todo-checkbox" />
  <h3 class="title-todo" contenteditable="true" data-placeholder="title" data-is-hidden="${Boolean(
    todo
  )}">${todo ? todo.title : ""}</h3>
  <button class="view-details-btn"><img src="${
    todo ? ShowIcon : HideIcon
  }" alt="${todo ? "Show Details" : "Hide details"}"></button>
`;
  return toDoHtml;
};

const getProjects = function (toDoElement) {
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

const getDate = function (dateControl) {
  let date = null;
  if (dateControl?.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

const saveOnBlur = function (
  toDoContainer,
  descriptionElement,
  controlsElement,
  handleEditToDo
) {
  const titleElement = toDoContainer.querySelector(".title-todo");

  [titleElement, descriptionElement].forEach((element) => {
    element.addEventListener("blur", () => {
      saveToDo(toDoContainer, handleEditToDo);
    });
    element.addEventListener("input", () => {
      if (element.textContent === "") {
        element.innerHTML = "";
      }
    });
  });

  const dateControl = controlsElement.querySelector('input[type="date"]');
  dateControl.addEventListener("change", () => {
    saveToDo(toDoContainer, handleEditToDo);
  });
};

const saveToDo = function (toDoContainer, handleEditToDo) {
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
  const newId = handleEditToDo(editedToDo);
  toDoContainer.dataset.id = newId;
};

const createToDoContainer = function (
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
    if (title.textContent == "") {
      title.innerHTML = "";
    }
  });

  if (!todo) {
    toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
    toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  }

  return toDoContainer;
};

const doOnCompleteToDo = function (toDoContainer, handleCompleteToDo) {
  const checkbox = toDoContainer.querySelector(".complete-todo-checkbox");
  checkbox.addEventListener("click", () => {
    if (!toDoContainer.dataset.id) {
      toDoContainer.remove();
      return;
    }
    handleCompleteToDo(toDoContainer.dataset.id);
  });
};

const generateDescriptionElement = function (toDo) {
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
    if (descriptionElement.textContent == "") {
      descriptionElement.innerHTML = "";
    }
  });

  return descriptionElement;
};

const generateControlsElement = function (
  toDo,
  handleDeleteToDo,
  toDoContainer
) {
  const controls = document.createElement("div");
  controls.classList.add("todo-controls-container");
  const controlsInnerHtml = `
  <input type="date" value="" />
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
    toDoContainer = controls.closest("li.todo");
    if (!toDoContainer) return;
    handleDeleteToDo(toDoContainer.dataset.id);
    toDoContainer.remove();
  });

  return controls;
};

const showDetails = function (
  toDoContainer,
  descriptionElement,
  controlsElement
) {
  if (toDoContainer.dataset.isHidden !== "true") return;
  toDoContainer.querySelector(".view-details-btn img").src = HideIcon;
  toDoContainer.dataset.isHidden = "false";
  toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
  toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  descriptionElement.focus();
};

const hideDetails = function (
  toDoContainer,
  handleEditToDo,
  descriptionElement,
  controlsElement,
  projectsElement
) {
  saveToDo(toDoContainer, handleEditToDo);
  toDoContainer.dataset.isHidden = "true";
  toDoContainer.querySelector(".view-details-btn img").src = ShowIcon;
  descriptionElement.remove();
  controlsElement.remove();
  projectsElement.remove();
  const existingProjectsContainer = toDoContainer.querySelector(
    ".project-selection-container"
  );
  if (existingProjectsContainer) {
    existingProjectsContainer.remove();
  }
};

const doOnShowOrHideDetails = function (
  toDoContainer,
  handleEditToDo,
  descriptionElement,
  controlsElement,
  projectsElement
) {
  const showHideBtn = toDoContainer.querySelector(".view-details-btn");
  showHideBtn.addEventListener("click", () => {
    if (toDoContainer.dataset.isHidden === "true") {
      showDetails(toDoContainer, descriptionElement, controlsElement);
      return;
    }
    hideDetails(
      toDoContainer,
      handleEditToDo,
      descriptionElement,
      controlsElement,
      projectsElement
    );
  });
  toDoContainer
    .querySelector(".title-todo")
    .addEventListener("dblclick", () => {
      showDetails(toDoContainer, descriptionElement, controlsElement);
    });
};

const doOnShowProjects = function (
  controlsElement,
  toDoContainer,
  projectsElement,
  handleEditToDo
) {
  const showProjectsBtn = controlsElement.querySelector(".projects-btn");
  showProjectsBtn.addEventListener("click", () => {
    if (toDoContainer.querySelector(".project-selection-container")) {
      saveToDo(toDoContainer, handleEditToDo);
      projectsElement.remove();
    } else {
      toDoContainer.insertAdjacentElement("beforeend", projectsElement);
    }
  });
};

export default function generateToDoElement(
  todo = null,
  handleDeleteToDo,
  handleEditToDo,
  handleCompleteToDo
) {
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  const isCompleted = projectTitle === "completed";
  if (isCompleted && !todo) return;
  const descriptionElement = generateDescriptionElement(todo);
  const controlsElement = generateControlsElement(todo, handleDeleteToDo);

  const toDoContainer = createToDoContainer(
    todo,
    isCompleted,
    descriptionElement,
    controlsElement
  );
  const projectsElement = generateProjectSelectionContainer(
    todo?.projects ?? [
      document.querySelector(".content .project-title").textContent,
    ],
    saveToDo.bind(null, toDoContainer, handleEditToDo)
  );
  doOnCompleteToDo(toDoContainer, handleCompleteToDo);
  if (isCompleted) return toDoContainer;
  doOnShowOrHideDetails(
    toDoContainer,
    handleEditToDo,
    descriptionElement,
    controlsElement,
    projectsElement
  );
  doOnShowProjects(
    controlsElement,
    toDoContainer,
    projectsElement,
    handleEditToDo
  );
  saveOnBlur(
    toDoContainer,
    descriptionElement,
    controlsElement,
    handleEditToDo
  );

  return toDoContainer;
}
