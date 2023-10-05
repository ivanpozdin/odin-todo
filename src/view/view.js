import TrashIcon from "./imgs/delete-project.svg";
import InboxIcon from "./imgs/inbox.svg";
import TodayIcon from "./imgs/today.svg";
import SomedayIcon from "./imgs/someday.svg";
import AnytimeIcon from "./imgs/anytime.svg";
import CompletedIcon from "./imgs/completed.svg";

export default function generateView(
  handleProjectClick,
  handleDeleteProjectOnClick
) {
  const viewHtml = `
  <div class="sidebar">
      <button class="fixed-todos-project todos-project" id="inbox">
        <img src="${InboxIcon}" alt="Inbox"> <span class="todo-project-title">inbox</span>
      </button>
      <button class="fixed-todos-project todos-project">
      <img src="${TodayIcon}" alt="Today"> <span class="todo-project-title">today</span>
      </button>
      <button class="fixed-todos-project todos-project">
      <img src="${SomedayIcon}" alt="Someday"> <span class="todo-project-title">someday</span>
        </button>
      <button class="fixed-todos-project todos-project" id="anytime">
      <img src="${AnytimeIcon}" alt="Anytime"> <span class="todo-project-title">anytime</span>
      </button>
      <button class="fixed-todos-project todos-project" id="completed-project">
      <img src="${CompletedIcon}" alt="Completed"> <span class="todo-project-title">completed</span>
      </button>
      <button type="button" id="add-project-btn">New Project</button>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h2 class="project-title">inbox</h2>
        <button class="delete-project-btn">
          <img src="${TrashIcon}" alt="Delete project">
        </button>
      </div>
      <button type="button" id="add-todo-btn">New To-Do</button>
      <ul class="todo-list">
      </ul>
    </div>
  `;
  document.querySelector("body").innerHTML = viewHtml;
  const projects = [...document.querySelectorAll(".todos-project")];
  projects.forEach((project) => {
    project.addEventListener("click", function (e) {
      handleProjectClick(
        project.querySelector(".todo-project-title").textContent
      );
    });
  });
  const deleteProjectBtn = document.querySelector(
    ".content-header>.delete-project-btn"
  );
  deleteProjectBtn.addEventListener("click", () => {
    const projectTitle = document.querySelector(
      ".content-header>.project-title"
    ).textContent;
    handleDeleteProjectOnClick(projectTitle);
  });
}
