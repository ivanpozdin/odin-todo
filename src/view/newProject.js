const generateNewProjectElement = function () {
  const projectElement = document.createElement("div");
  projectElement.classList.add("todos-project");
  projectElement.id = "new-project-input-sidebar";
  projectElement.setAttribute("contenteditable", "true");
  projectElement.dataset.placeholder = "project...";
  return projectElement;
};

export default function handleGeneratingNewProject(handler) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", function () {
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

    newProjectElement.addEventListener("input", () => {
      if (newProjectElement.textContent === "") {
        newProjectElement.innerHTML = "";
      }
    });
  });
}
