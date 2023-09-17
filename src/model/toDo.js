export default class ToDo {
  #title;
  #description;
  #date;
  #projects;
  #id;
  constructor(title, description, projects, date = null) {
    this.#title = title;
    this.#description = description;
    this.#date = date;
    this.#projects = projects;
    this.#id = new Date().getTime();
  }

  get projects() {
    return this.#projects;
  }

  set projects(newProjects) {
    this.#projects = newProjects;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get date() {
    return this.#date;
  }

  set date(newDate) {
    this.#date = newDate;
  }
}
