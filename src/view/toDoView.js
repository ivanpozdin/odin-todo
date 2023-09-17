export default function generateToDoElement(todo = null) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  const toDoHtml = `
    <input type="checkbox" class="complete-todo-btn" />
    <h3 class="title-todo" contenteditable="true" data-placeholder="title">${
      todo ? todo.title : ""
    }</h3>
    <div class="description-todo" contenteditable="true" data-placeholder="description...">${
      todo ? todo.description : ""
    }</div>
    <button class="save-to-do-btn">💾</button>
    <div class="todo-controls-container">
      <button class="when-btn todo-controls">📅</button>
      <button class="projects-btn todo-controls">🏷️</button>
      <button class="remove-todo-btn todo-controls">🗑️</button>
    </div>
  `;
  console.log(toDoHtml);
  toDoContainer.insertAdjacentHTML("afterbegin", toDoHtml);
  return toDoContainer;
}
