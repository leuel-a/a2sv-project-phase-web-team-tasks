import tasksReducer from "./tasks/tasksReducer";
import {configureStore} from "@reduxjs/toolkit";

const initalState = {
  tasks: [],
}

const store = configureStore({
  reducer: tasksReducer,
})

// store.subscribe(() => console.log(store.getState()));

export default store;
