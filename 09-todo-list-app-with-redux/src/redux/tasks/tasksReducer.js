import {DELETE_TASK, ADD_TASK, EDIT_TASK, TOGGLE_TASK, TOGGLE_COMPLETE} from "./tasksTypes";

const initialState = {
  tasks: [],
  showCompleted: false,
}

// Here I define the tasksReducer function
// The tasksReducer will contain all the logic for handling the tasks state.
// But here the localStorage will not be updated, because I want the tasksReducer
// to be a pure function.

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== Number(action.payload.id)),
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.task.id) {
            return action.payload.task;
          }
          return task;
        })
      }
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed,
            }
          }
          return task;
        })
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        showCompleted: !state.showCompleted,
      }
    default:
      return state
  }
}

export default tasksReducer;
