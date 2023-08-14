# Task List Application using React and Redux
## Overview
This document outlines the high-level structure of a simple task list application built using React and managed state using Redux.

## Features
- Display a list of tasks.
- Add new tasks.
- Mark tasks as completed.
- Filter tasks based on their completion status.

## Components
1. App Component: The root component of the application.

- Renders the TaskList and TaskForm components.
- Connects to the Redux store to access tasks.

2. TaskList Component: Displays a list of tasks.
- Maps through tasks from the Redux store and renders individual TaskItem components.
- Connects to the Redux store to access tasks.

3. TaskItem Component: Represents an individual task.
- Displays task text and a checkbox to mark it as completed.
- Dispatches an action to update the task's completion status when the checkbox is toggled.
- Connects to the Redux store to access tasks and dispatch actions.
4. TaskForm Component:

- Provides an input field and a button to add new tasks.
- Dispatches an action to add a new task to the Redux store.
- Connects to the Redux store to dispatch actions.

5. Redux Store
- State: An array of task objects, each containing:
- id: Unique identifier for the task.
- text: Text content of the task.
- completed: Boolean indicating whether the task is completed.
- Actions:

  - ADD_TASK: Adds a new task to the store.
  - TOGGLE_TASK: Toggles the completion status of a task.
- Reducers:
  - taskReducer: Handles the state changes based on dispatched actions.
  - Manages tasks array by adding new tasks and updating their completion status.
