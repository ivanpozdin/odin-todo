import ToDo from "./TODO";
export default class State {
  #toDos = {};
  #completedToDos = {};
  #projects = {};
  #currentProject;
  #fixedProjects;
  constructor(fixedProjects) {
    fixedProjects.forEach((project) => (this.#projects[project] = []));
    this.#fixedProjects = fixedProjects;
  }

  set fixedProjects(projectsNames) {
    this.#fixedProjects = projectsNames;
  }

  addToDo(title, description, projects, date = null) {
    const toDo = new ToDo(title, description, projects, date);
    this.#toDos[toDo.id] = toDo;
    projects.forEach((project) => {
      if (this.#projects[project]) {
        this.#projects[project].unshift(toDo);
      } else {
        this.#projects[project] = [toDo];
      }
    });
    return toDo.id;
  }

  addProject(projectName) {
    if (this.#projects[projectName]) {
      return;
    }
    this.#projects[projectName] = [];
  }

  removeToDo(toDoId) {
    this.#toDos[toDoId].projects.forEach((project) => {
      const deleteIndex = this.#projects[project].findIndex(
        (curToDo) => curToDo.id === toDoId
      );
      this.#projects[project].splice(deleteIndex, 1);
    });
    delete this.#toDos[toDoId];
  }

  completeToDo(toDoId) {
    this.#completedToDos[toDoId] = this.#toDos[toDoId];
    this.removeToDo(toDoId);
  }

  getAllToDosInProject(project) {
    return this.#projects[project];
  }

  editToDo(toDoId, title, description, projects, date = null) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    this.#toDos[toDoId].title = title ?? this.#toDos[toDoId].title;
    this.#toDos[toDoId].description = title ?? this.#toDos[toDoId].description;
    this.#toDos[toDoId].projects = title ?? this.#toDos[toDoId].projects;
    this.#toDos[toDoId].projects = date ?? this.#toDos[toDoId].date;
  }

  moveToDoPriorityInProjectUp(toDoId, project) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    console.log(this.#projects[project]);
    const indexOfToDo = this.#projects[project].findIndex(
      (toDo) => toDo.id === toDoId
    );
    console.log(`Found index: ${indexOfToDo}`);
    if (!indexOfToDo ?? indexOfToDo === 0) {
      return;
    }
    console.log(`before swap: ${this.#projects[project]}`);
    [
      this.#projects[project][indexOfToDo - 1],
      this.#projects[project][indexOfToDo],
    ] = [
      this.#projects[project][indexOfToDo],
      this.#projects[project][indexOfToDo - 1],
    ];
    console.log(`after swap: ${this.#projects[project]}`);
  }

  moveToDoPriorityInProjectDown(toDoId, project) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    const indexOfToDo = this.#projects[project].findIndex(
      (toDo) => toDo.id === toDoId
    );
    if (!indexOfToDo || indexOfToDo === this.#projects[project].length - 1) {
      return;
    }

    [
      this.#projects[project][indexOfToDo + 1],
      this.#projects[project][indexOfToDo],
    ] = [
      this.#projects[project][indexOfToDo],
      this.#projects[project][indexOfToDo + 1],
    ];
  }

  #isOneEmoji(str) {
    if (str.length !== 1) return false;
    const withEmojis = /\p{Extended_Pictographic}/u;
    return withEmojis.test(str);
  }

  get userProjectNames() {
    return Object.keys(this.#projects).filter((name) =>
      this.#fixedProjects.every((project) => project !== name)
    );
  }
}
