export default function generateView(handleProjectClick) {
  const viewHtml = `
  <div class="sidebar">
      <div class="projects-controls">
        <button type="button" id="add-todo-btn">+ to-do</button>
        <button type="button" id="add-project-btn">+ project</button>
      </div>
      <button class="fixed-todos-project todos-project" id="inbox">📬 inbox</button>
      <button class="fixed-todos-project todos-project">🔥 today</button>
      <button class="fixed-todos-project todos-project">📅 someday</button>
      <button class="fixed-todos-project todos-project" id="anytime">
        🗓️ anytime
      </button>
      <button class="fixed-todos-project todos-project" id="completed-project">✅ completed</button>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <h2 class="project-title">📬 inbox</h2>
      <ul class="todo-list">
      </ul>
    </div>
  `;
  document.querySelector("body").innerHTML = viewHtml;
  const projects = [...document.querySelectorAll(".todos-project")];
  projects.forEach((project) => {
    project.addEventListener("click", function (e) {
      handleProjectClick(project.textContent);
    });
  });
}
// <button class="fixed-todos-project todos-project " id="trash-project">🗑️ trash</button>
