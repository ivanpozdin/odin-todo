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
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo,
    projectName === "✅ completed"
  );
};

const handleCompleteToDo = function (id) {
  state.completeToDo(id);
  generateAllToDosInProject(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo,
    state.currentProject === "✅ completed"
  );
};
const handleAddNewProject = function (projectName) {
  state.addProject(projectName);
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const handleEditToDo = function (toDoId, title, description, projects, date) {
  state.editToDo(toDoId, title, description, projects, date);
  if (!projects.includes(state.currentProject)) {
    generateAllToDosInProject(
      state.currentProject,
      state.getAllToDosInProject(),
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
  }
  generateProjectsView(state.userProjectNames, handleProjectClick);
};

const handleDeleteToDo = function (id) {
  state.removeToDo(id);
};

const init = function () {
  generateView(handleProjectClick);
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
