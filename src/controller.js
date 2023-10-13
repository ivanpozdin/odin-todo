import State from "./model/state.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";
import handleGeneratingNewProject from "./view/newProject.js";

const fixedProjects = ["inbox", "today", "someday", "anytime"];
const state = new State(fixedProjects);

const isDateToday = function (date) {
  if (!date) return false;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const handleProjectClick = function (projectName) {
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};

const handleDeleteProject = function (projectName) {
  state.deleteProject(projectName);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const handleCompleteToDo = function (id) {
  state.completeToDo(id);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};
const handleAddNewProject = function (projectName) {
  state.addProject(projectName);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const handleEditToDo = function (toDoEditedProperties) {
  const toDoId = state.editToDo(toDoEditedProperties);
  if (
    (state.currentProject === "today" &&
      "date" in toDoEditedProperties &&
      !isDateToday(new Date(toDoEditedProperties.date))) ||
    (!["today", "someday", "anytime"].includes(state.currentProject) &&
      !state.getToDoProjectsById(toDoId).includes(state.currentProject))
  ) {
    generateAllToDosInProject(
      state.currentProject,
      state.getAllToDosInProject(),
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
  }
  generateProjectsView(state.userProjectNames, handleProjectClick);
  return toDoId;
};

const handleDeleteToDo = function (id) {
  state.removeToDo(id);
};

const init = function () {
  generateView(handleProjectClick, handleDeleteProject);
  handleGeneratingNewToDo(handleDeleteToDo, handleEditToDo, handleCompleteToDo);
  handleGeneratingNewProject(handleAddNewProject);
  generateProjectsView(state.userProjectNames, handleProjectClick);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};
init();
