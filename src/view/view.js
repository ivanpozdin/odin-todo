export default function generateView(handleProjectClick) {
  const viewHtml = `
  <div class="sidebar">
      <div class="projects-controls">
        <button type="button" id="add-todo-btn">+ to-do</button>
        <button type="button">+ project</button>
      </div>
      <div class="fixed-todos-project todos-project" id="inbox">📬 inbox</div>
      <div class="fixed-todos-project todos-project">🔥 today</div>
      <div class="fixed-todos-project todos-project">📅 someday</div>
      <div class="fixed-todos-project todos-project" id="anytime">
        🗓️ anytime
      </div>
      <div class="fixed-todos-project todos-project">✅ completed</div>
      <div class="fixed-todos-project todos-project " id="trash-project">🗑️ trash</div>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <h2 class="project-title">Inbox</h2>
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
