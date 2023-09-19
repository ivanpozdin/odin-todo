const generateNewProjectElement = function () {
  const projectElement = document.createElement("div");
  projectElement.setAttribute("class", "todos-project");
  projectElement.setAttribute("contenteditable", "true");
  return projectElement;
};

// const handleSavingNewProject = function(e) {
//   console.log(e.targer)

// }

export default function handleGeneratingNewToProject(handler) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", function () {
    const projectContainer = document.querySelector(".user-projects-container");
    const newProjectElement = generateNewProjectElement();
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.addEventListener("blur", function () {
      const projectName = newProjectElement.textContent;
      if (projectName !== "") {
        handler(projectName);
      }
      newProjectElement.remove();
    });
  });
}

// const newProjectElement = generateOneProjectElement(projectName);

// projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
// newProjectElement.addEventListener("click", function (e) {
//   handleProjectClick(newProjectElement.textContent);  });
