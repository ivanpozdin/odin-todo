import State from "./model/state.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";
import handleGeneratingNewProject from "./view/newProject.js";

const fixedProjects = ["📬 inbox", "🔥 today", "📅 someday", "🗓️ anytime"];
const state = new State(fixedProjects);

const handleProjectClick = function (projectName) {
  console.log(projectName, state.getAllToDosInProject(projectName));
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName),
    handleDeleteToDo
  );
};

const handleAddNewProject = function (projectName) {
  state.addProject(projectName);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const handleDeleteToDo = function (id) {
  state.removeToDo(id);
};

const getNewToDo = function (title, description, projects, date) {
  state.addToDo(title, description, ["🗓️ anytime"].concat(projects), date);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo
  );
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const init = function () {
  generateView(handleProjectClick);
  handleGeneratingNewToDo(getNewToDo);
  handleGeneratingNewProject(handleAddNewProject);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};
init();
