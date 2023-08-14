const initialState = {
  tasks: [],
}

// Here I define the tasksReducer function
// The tasksReducer will contain all the logic for handling the tasks state.
// But here the localStorage will not be updated, because I want the tasksReducer
// to be a pure function.

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== Number(action.payload)),
      }
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              ...action.payload,
            }
          }
          else {
            return task;
          }
        })
      }
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      }
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: true,
            }
          }
          else {
            return task;
          }
        })
      }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            }
          }
          else {
            return task;
          }
        })
      }
    default:
      return state
  }
}

export default tasksReducer;
