export default function generateView(handleProjectClick) {
  const viewHtml = `
  <div class="sidebar">
      <div class="projects-controls">
        <button type="button" id="add-todo-btn">+ to-do</button>
        <button type="button" id="add-project-btn">+ project</button>
      </div>
      <button class="fixed-todos-project todos-project" id="inbox">
        📬 <span class="todo-project-title">inbox</span>
      </button>
      <button class="fixed-todos-project todos-project">
        🔥 <span class="todo-project-title">today</span>
      </button>
      <button class="fixed-todos-project todos-project">
        📅 <span class="todo-project-title">someday</span>
        </button>
      <button class="fixed-todos-project todos-project" id="anytime">
        🗓️ <span class="todo-project-title">anytime</span>
      </button>
      <button class="fixed-todos-project todos-project" id="completed-project">
        ✅ <span class="todo-project-title">completed</span>
      </button>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <h2 class="project-title">inbox</h2>
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
}
