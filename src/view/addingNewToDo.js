import generateToDoElement from "./toDoView.js";
export default function handleGeneratingNewToDo(handler) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", function () {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement();
    const [titleElement, descriptionElement] = [
      toDoElement.querySelector(".title-todo"),
      toDoElement.querySelector(".description-todo"),
    ];
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    titleElement.focus();
    titleElement.addEventListener("input", function () {
      if (titleElement.textContent === "") {
        titleElement.innerHTML = "";
      }
    });

    descriptionElement.addEventListener("input", function () {
      if (descriptionElement.textContent === "") {
        descriptionElement.innerHTML = "";
      }
    });

    const saveToDoBtn = toDoElement.querySelector(".save-to-do-btn");
    saveToDoBtn.addEventListener("click", function () {
      if (
        titleElement.textContent === "" &&
        descriptionElement.textContent === ""
      ) {
        toDoElement.remove();
      }
      handler(titleElement.textContent, descriptionElement.textContent);
    });
  });
}
