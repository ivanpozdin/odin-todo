import State from "./model/state.js";
// import state from "./model/model.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";
import handleGeneratingNewToProject from "./view/newProject.js";

const fixedProjects = ["📬 inbox", "🔥 today", "📅 someday", "🗓️ anytime"];
const state = new State(fixedProjects);

const handleProjectClick = function (projectName) {
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName)
  );
};

const handleAddNewProject = function (projectName) {
  state.addProject(projectName);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const getNewToDo = function (title, description) {
  state.addToDo(title, description, ["anytime"], new Date());
  generateAllToDosInProject(state.currentProject, state.getAllToDosInProject());
};

const init = function () {
  generateView(handleProjectClick);
  handleGeneratingNewToDo(getNewToDo);
  handleGeneratingNewToProject(handleAddNewProject);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};
init();
