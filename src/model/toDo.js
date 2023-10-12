export default function ToDo(toDoProperties) {
  return {
    title: toDoProperties.title ?? "",
    description: toDoProperties.description ?? "",
    projects: toDoProperties.projects,
    date: toDoProperties.description ?? "",
    id: new Date().getTime(),
  };
}
