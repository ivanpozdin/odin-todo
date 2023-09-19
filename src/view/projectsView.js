const generateOneProjectElement = function (projectName) {
  const projectElement = document.createElement("button");
  projectElement.setAttribute("class", "todos-project");
  projectElement.textContent = projectName;
  return projectElement;
};

export default function generateProjectsView(projectNames, handleProjectClick) {
  const projectContainer = document.querySelector(".user-projects-container");
  projectContainer.innerHTML = "";
  projectNames.forEach((projectName) => {
    const newProjectElement = generateOneProjectElement(projectName);
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.addEventListener("click", function (e) {
      handleProjectClick(newProjectElement.textContent);
    });
  });
}
