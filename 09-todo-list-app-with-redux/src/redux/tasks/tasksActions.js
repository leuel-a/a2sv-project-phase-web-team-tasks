import { ADD_TASK, DELETE_TASK } from './tasksTypes';

// This is where I define my action creators
// Note that I will not be using all of them in this project
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      task,
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    }
  }
}

export const editTask = (task) => {
  return {
    type: 'EDIT_TASK',
    payload: {
      task,
    }
  }
}

export const completeTask = (id) => {
  return {
    type: 'COMPLETE_TASK',
    payload: {
      id,
    }
  }
}

export const toogleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: {
      id,
    }
  }
}
