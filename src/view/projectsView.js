const generateOneProjectElement = function generateOneProjectElement(
  projectName
) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("todos-project");
  projectElement.textContent = projectName;
  return projectElement;
};

export default function generateProjectsView(
  projectNames,
  handleProjectClick,
  handlers
) {
  const projectContainer = document.querySelector(".user-projects-container");
  projectContainer.innerHTML = "";
  projectNames.forEach((projectName) => {
    const newProjectElement = generateOneProjectElement(projectName);
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.addEventListener("click", () => {
      handleProjectClick(newProjectElement.textContent, handlers);
    });
  });
}
