import State from "./model/state.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";
import handleGeneratingNewProject from "./view/newProject.js";
import generateToDoElement from "./view/toDoView.js";

const fixedProjects = ["inbox", "today", "someday", "anytime"];
const computedProjects = ["today", "someday", "anytime", "completed"];
const state = new State(fixedProjects);

const isDateToday = function isGivenDateToday(date) {
  if (!date) return false;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
const handleDeleteToDo = function handleDeleteToDo(id) {
  state.removeToDo(id);
};
const handleCompleteToDo = function handleCompleteToDo(handlers, id) {
  state.completeToDo(id);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    generateToDoElement.bind(null, handlers)
  );
};

const handleProjectClick = function handleProjectClick(handlers, projectName) {
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName),
    generateToDoElement.bind(null, handlers)
  );
};

const handleEditToDo = function handleEditToDo(handlers, toDoEditedProperties) {
  const toDoId = state.editToDo(toDoEditedProperties);
  const isTodayChanged =
    state.currentProject === "today" &&
    "date" in toDoEditedProperties &&
    !isDateToday(new Date(toDoEditedProperties.date));
  const isNotComputedProject = !computedProjects.includes(state.currentProject);
  const wasCurrentProjectDeleted = !state
    .getToDoProjectsById(toDoId)
    .includes(state.currentProject);
  if (isTodayChanged || (isNotComputedProject && wasCurrentProjectDeleted)) {
    generateAllToDosInProject(
      state.currentProject,
      state.getAllToDosInProject(),
      generateToDoElement.bind(null, handlers)
    );
  }
  generateProjectsView(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
  return toDoId;
};

const handleDeleteProject = function handleDeleteProject(
  handlers,
  projectName
) {
  state.deleteProject(projectName);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    generateToDoElement.bind(null, handlers)
  );
  generateProjectsView(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
};

const handleAddNewProject = function handleAddNewProject(
  projectName,
  handlers
) {
  state.addProject(projectName);
  generateProjectsView(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
};

const init = function startApplication() {
  const handlers = { handleDeleteToDo, handleEditToDo, handleCompleteToDo };
  handlers.handleEditToDo = handleEditToDo.bind(null, handlers);
  handlers.handleCompleteToDo = handleCompleteToDo.bind(null, handlers);
  generateView(
    handleProjectClick.bind(null, handlers),
    handleDeleteProject.bind(null, handlers)
  );
  handleGeneratingNewToDo(generateToDoElement.bind(null, handlers));
  handleGeneratingNewProject(handleAddNewProject, handlers);
  generateProjectsView(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    generateToDoElement.bind(null, handlers)
  );
};
init();
