import ToDo from "./toDo.js";

export default class State {
  #toDos = {};

  #completedToDos = {};

  #projects = {};

  #currentProject = "inbox";

  #fixedProjects;

  constructor(fixedProjects) {
    fixedProjects.forEach((project) => {
      this.#projects[project] = [];
    });
    this.#fixedProjects = fixedProjects;
    this.#getLocalStorage();
  }

  set fixedProjects(projectsNames) {
    this.#fixedProjects = projectsNames;
  }

  get currentProject() {
    return this.#currentProject;
  }

  set currentProject(projectName) {
    if (projectName && projectName in this.#projects) {
      this.#currentProject = projectName;
    }
  }

  addToDo(toDoProperties) {
    if (this.#currentProject === "completed") return null;

    let projectWithCurrent = [this.currentProject];
    if (toDoProperties.projects) {
      projectWithCurrent = [
        ...new Set(projectWithCurrent.concat(toDoProperties.projects)),
      ];
    }
    projectWithCurrent = projectWithCurrent.filter(
      (project) => project === "inbox" || !this.#fixedProjects.includes(project)
    );
    const toDoPropertiesWithCurrentProject = { ...toDoProperties };
    toDoPropertiesWithCurrentProject.projects = projectWithCurrent;

    const toDo = ToDo(toDoPropertiesWithCurrentProject);

    this.#toDos[toDo.id] = toDo;

    projectWithCurrent.forEach((project) => {
      if (project in this.#projects) {
        this.#projects[project].unshift(toDo.id);
      } else {
        this.#projects[project] = [toDo.id];
      }
    });
    this.#setLocalStorage();
    return toDo.id;
  }

  getToDoProjectsById(id) {
    if (!(id in this.#toDos)) {
      return [];
    }
    return [...this.#toDos[id].projects];
  }

  addProject(projectName) {
    if (projectName in this.#projects) {
      return;
    }

    this.#projects[projectName] = [];
    this.#setLocalStorage();
  }

  #removeToDoFromCompleted(toDoId) {
    if (!(toDoId in this.#completedToDos)) return null;
    const toDoToDelete = this.#completedToDos[toDoId];
    delete this.#completedToDos[toDoId];
    this.#setLocalStorage();
    return toDoToDelete;
  }

  #removeToDoFromActiveToDos(toDoId) {
    if (!(toDoId in this.#toDos)) return null;
    this.#toDos[toDoId].projects.forEach((project) => {
      const deleteIndex = this.#projects[project].findIndex(
        (curToDoId) => curToDoId === toDoId
      );
      this.#projects[project].splice(deleteIndex, 1);
    });
    const toDoToDelete = this.#toDos[toDoId];
    delete this.#toDos[toDoId];
    this.#setLocalStorage();
    return toDoToDelete;
  }

  removeToDo(toDoId) {
    if (this.#currentProject === "completed") {
      return this.#removeToDoFromCompleted(toDoId);
    }
    return this.#removeToDoFromActiveToDos(toDoId);
  }

  getAllToDosInProject(project = "") {
    this.#currentProject = project.trim() || this.#currentProject;
    this.#setLocalStorage();

    if (this.#currentProject === "completed") {
      return Object.values(this.#completedToDos);
    }
    if (this.#currentProject === "today") {
      return this.#todayToDos;
    }

    if (this.#currentProject === "someday") {
      return this.#somedayToDos;
    }

    if (this.#currentProject === "anytime") {
      return this.#anytimeToDos;
    }

    const todos = this.#projects[this.#currentProject].map(
      (toDoId) => this.#toDos[toDoId]
    );
    return todos;
  }

  editToDo(toDoEditedProperties) {
    if (this.#currentProject === "completed") {
      return null;
    }
    if (!toDoEditedProperties.id || !(toDoEditedProperties.id in this.#toDos)) {
      const newId = this.addToDo(toDoEditedProperties);
      return newId;
    }
    const toDo = this.#toDos[toDoEditedProperties.id];
    if ("projects" in toDoEditedProperties) {
      const oldProjects = toDo.projects;
      const removedProjects = oldProjects.filter(
        (oldProject) => !toDoEditedProperties.projects.includes(oldProject)
      );
      this.#saveNewProjects(
        oldProjects,
        toDoEditedProperties.projects,
        toDoEditedProperties.id
      );
      this.#deleteToDoFromExcludedProjects(
        removedProjects,
        toDoEditedProperties.id
      );
    }

    this.#updateToDo(toDoEditedProperties);
    this.#setLocalStorage();
    return toDo.id;
  }

  #restoreToDoFromCompleted(toDoId) {
    if (!(toDoId in this.#completedToDos)) {
      return;
    }
    const toDo = this.#completedToDos[toDoId];
    delete this.#completedToDos[toDoId];

    this.#toDos[toDo.id] = toDo;
    toDo.projects.forEach((project) => {
      if (project in this.#projects) {
        this.#projects[project].unshift(toDo.id);
      } else {
        this.#projects[project] = [toDo.id];
      }
    });
    this.#setLocalStorage();
  }

  #putToDoToCompleted(toDoId) {
    if (toDoId in this.#completedToDos) {
      return;
    }
    const toDoToComplete = this.removeToDo(toDoId);
    this.#completedToDos[toDoId] = toDoToComplete;
  }

  completeToDo(toDoId) {
    if (toDoId in this.#completedToDos) {
      this.#restoreToDoFromCompleted(toDoId);
    } else {
      this.#putToDoToCompleted(toDoId);
    }
  }

  #updateToDo(toDo) {
    if ("title" in toDo) {
      this.#toDos[toDo.id].title = toDo.title;
    }
    if ("description" in toDo) {
      this.#toDos[toDo.id].description = toDo.description;
    }
    if ("projects" in toDo) {
      this.#toDos[toDo.id].projects = toDo.projects;
    }
    if ("date" in toDo) {
      this.#toDos[toDo.id].date = toDo.date;
    }
  }

  #deleteToDoFromExcludedProjects(removedProjects, id) {
    removedProjects.forEach((project) => {
      const index = this.#projects[project].findIndex((oldId) => oldId === id);
      this.#projects[project].splice(index, 1);
    });
  }

  #saveNewProjects(oldProjects, newProjects, toDoId) {
    newProjects.forEach((project) => {
      if (oldProjects.includes(project)) return;

      if (this.#projects[project]) {
        this.#projects[project].unshift(toDoId);
      } else {
        this.#projects[project] = [toDoId];
      }
    });
  }

  #setLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.#toDos));
    localStorage.setItem("projects", JSON.stringify(this.#projects));
    localStorage.setItem(
      "completed_todos",
      JSON.stringify(this.#completedToDos)
    );
    localStorage.setItem(
      "current_project",
      JSON.stringify(this.#currentProject)
    );
  }

  #getLocalStorage() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const projects = JSON.parse(localStorage.getItem("projects"));
    const completedToDos = JSON.parse(localStorage.getItem("completed_todos"));
    const currentProject = JSON.parse(localStorage.getItem("current_project"));
    if (todos) {
      this.#toDos = todos;
    }
    if (projects) {
      this.#projects = projects;
    }

    if (completedToDos) {
      this.#completedToDos = completedToDos;
    }
    if (currentProject) {
      this.#currentProject = currentProject;
    }
  }

  deleteProject(projectToDeleteName) {
    if (!(projectToDeleteName in this.#projects)) return;
    if (this.#fixedProjects.includes(projectToDeleteName)) return;
    Object.keys(this.#toDos).forEach((id) => {
      this.#toDos[id].projects = this.#toDos[id].projects.filter(
        (project) => project !== projectToDeleteName
      );
    });
    Object.keys(this.#completedToDos).forEach((id) => {
      this.#completedToDos[id].projects = this.#completedToDos[
        id
      ].projects.filter((project) => project !== projectToDeleteName);
    });
    delete this.#projects[projectToDeleteName];
    this.#currentProject = "inbox";
  }

  get userProjectNames() {
    return Object.keys(this.#projects).filter((name) =>
      this.#fixedProjects.every((project) => project !== name)
    );
  }

  get #somedayToDos() {
    const somedayToDos = Object.values(this.#toDos).filter((toDo) => toDo.date);
    somedayToDos.sort((todoA, todoB) => -todoA.id + todoB.id);
    return somedayToDos;
  }

  get #anytimeToDos() {
    return Object.values(this.#toDos);
  }

  get #todayToDos() {
    const today = new Date();

    const todayToDos = Object.values(this.#toDos).filter((toDo) => {
      if (!toDo.date) return false;
      const currentToDoDate = new Date(toDo.date);
      return (
        currentToDoDate.getDate() === today.getDate() &&
        currentToDoDate.getMonth() === today.getMonth() &&
        currentToDoDate.getFullYear() === today.getFullYear()
      );
    });
    todayToDos.sort((todoA, todoB) => -todoA.id + todoB.id);
    return todayToDos;
  }

  moveToDoPriorityInProjectUp(toDoId, project) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    const indexOfToDo = this.#projects[project].findIndex(
      (toDo) => toDo.id === toDoId
    );

    if (!indexOfToDo ?? indexOfToDo === 0) {
      return;
    }
    [
      this.#projects[project][indexOfToDo - 1],
      this.#projects[project][indexOfToDo],
    ] = [
      this.#projects[project][indexOfToDo],
      this.#projects[project][indexOfToDo - 1],
    ];
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
}
