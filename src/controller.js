import State from "./model/state.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";
import handleGeneratingNewProject from "./view/newProject.js";

const fixedProjects = ["inbox", "today", "someday", "anytime"];
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
const handleCompleteToDo = function handleCompleteToDo(id, handlers) {
  state.completeToDo(id);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handlers
  );
};

const handleProjectClick = function handleProjectClick(projectName, handlers) {
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName),
    handlers
  );
};

const handleEditToDo = function handleEditToDo(toDoEditedProperties, handlers) {
  const toDoId = state.editToDo(toDoEditedProperties);
  const isTodayChanged =
    state.currentProject === "today" &&
    "date" in toDoEditedProperties &&
    !isDateToday(new Date(toDoEditedProperties.date));
  const isNotComputedProject = ![
    "today",
    "someday",
    "anytime",
    "completed",
  ].includes(state.currentProject);
  const wasCurrentProjectDeleted = !state
    .getToDoProjectsById(toDoId)
    .includes(state.currentProject);
  if (isTodayChanged || (isNotComputedProject && wasCurrentProjectDeleted)) {
    generateAllToDosInProject(
      state.currentProject,
      state.getAllToDosInProject(),
      handlers
    );
  }
  generateProjectsView(state.userProjectNames, handleProjectClick, handlers);
  return toDoId;
};

const handleDeleteProject = function handleDeleteProject(
  projectName,
  handlers
) {
  state.deleteProject(projectName);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handlers
  );
  generateProjectsView(state.userProjectNames, handleProjectClick, handlers);
};

const handleAddNewProject = function handleAddNewProject(
  projectName,
  handlers
) {
  state.addProject(projectName);
  generateProjectsView(state.userProjectNames, handleProjectClick, handlers);
};

const init = function startApplication() {
  const handlers = { handleDeleteToDo, handleEditToDo, handleCompleteToDo };
  generateView(handleProjectClick, handlers, handleDeleteProject);
  handleGeneratingNewToDo(handlers);
  handleGeneratingNewProject(handleAddNewProject, handlers);
  generateProjectsView(state.userProjectNames, handleProjectClick, handlers);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handlers
  );
};
init();
