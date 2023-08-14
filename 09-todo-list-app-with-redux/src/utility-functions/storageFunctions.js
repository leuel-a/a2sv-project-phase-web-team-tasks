// Here will be the logic for storing and retrieving data from local storage
function addToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  let tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(localStorage.getItem('tasks'));
  }
  else {
    return [];
  }
}

function setTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
