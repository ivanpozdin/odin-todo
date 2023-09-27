const generateNewProjectElement = function () {
  const projectElement = document.createElement("div");
  projectElement.setAttribute("class", "todos-project");
  projectElement.setAttribute("contenteditable", "true");
  return projectElement;
};

export default function handleGeneratingNewProject(handler) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", function () {
    console.log("aaaaaaa");
    const projectContainer = document.querySelector(".user-projects-container");
    const newProjectElement = generateNewProjectElement();
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.focus();
    newProjectElement.addEventListener("blur", function () {
      const projectName = newProjectElement.textContent;
      if (projectName !== "") {
        handler(projectName);
      }
      newProjectElement.remove();
    });
  });
}
