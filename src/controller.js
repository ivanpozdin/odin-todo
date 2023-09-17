import State from "./model/state.js";
// import state from "./model/model.js";
import "./style.css";
import generateView from "./view/view.js";
import generateAllToDosInProject from "./view/allToDosInProject.js";
import handleGeneratingNewToDo from "./view/addingNewToDo.js";
import generateProjectsView from "./view/projectsView.js";

const handleProjectClick = function (projectName) {
  generateAllToDosInProject(
    projectName,
    state.getAllToDosInProject(projectName)
  );
};

const fixedProjects = ["inbox", "today", "someday", "anytime"];
const state = new State(fixedProjects);

const getNewToDo = function (title, description) {
  state.addToDo(title, description, ["study"], new Date());
  generateAllToDosInProject("study", state.getAllToDosInProject("study"));
};
generateView(handleProjectClick);
handleGeneratingNewToDo(getNewToDo);

const waitHundredMilliseconds = function () {
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      resolve();
    }, 100);
  });
};

const printPrettyToDo = function (toDo) {
  console.log(`${toDo.title}\n${toDo.description}`);
};
console.log("Start controller");

const dinnerId = state.addToDo(
  "today",
  "make a dinner",
  ["today", "this week", "chores"],
  new Date()
);

await waitHundredMilliseconds();

const examId = state.addToDo(
  "exam",
  "prepare for an exam",
  ["today", "this week", "study"],
  new Date()
);
const groceriesId = state.addToDo(
  "groceries",
  "buy groceries for a party",
  ["today", "this week", "chores"],
  new Date()
);

await waitHundredMilliseconds();
const cleaningId = state.addToDo(
  "cleaning",
  "clean the kitchen",
  ["tomorrow", "this week", "chores"],
  new Date()
);

await waitHundredMilliseconds();
const calculusId = state.addToDo(
  "calculus hw",
  "solve 5/10 calculus hw problems",
  ["study"],
  new Date()
);

state.getAllToDosInProject("study").forEach((toDo) => {
  printPrettyToDo(toDo);
});

console.log(examId);
state.moveToDoPriorityInProjectUp(examId, "study");
console.log("---------------------------------");
state.getAllToDosInProject("study").forEach((toDo) => {
  printPrettyToDo(toDo);
});
console.log(state.userProjectNames);
generateProjectsView(state.userProjectNames, handleProjectClick);
generateAllToDosInProject("study", state.getAllToDosInProject("study"));
