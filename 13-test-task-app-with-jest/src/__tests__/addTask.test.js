import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTask from "../components/AddTask";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Add Task Component Test', () => {
  test('Add Task Component renders', () => {
    const initialState = {
      tasks: [],
      showCompleted: false,
    }

    const store = mockStore(initialState);
    render(
      <Provider store={ store } >
        <Router>
          <AddTask />
        </Router>
      </Provider>
    )

    // Check if the component renders
    expect(screen.getByText('Task Name')).toBeInTheDocument();
    expect(screen.getByText('Task Description')).toBeInTheDocument();

    const createTaskButton = screen.getByRole('button', { name: 'Create Task' });
    expect(createTaskButton).toBeInTheDocument();
  })

  test('Input fields are typable', () => {
    render(
      <Provider store={ mockStore({}) }>
        <Router>
          <AddTask />
        </Router>
      </Provider>
    );

    const taskNameInput = screen.getByPlaceholderText('Enter task here');
    fireEvent.change(taskNameInput, { target: { value: 'New Task Title' } });
    expect(taskNameInput.value).toBe('New Task Title');

    const descriptionTextarea = screen.getByPlaceholderText('Enter the description here');
    fireEvent.change(descriptionTextarea, { target: { value: 'New Task Description' } });
    expect(descriptionTextarea.value).toBe('New Task Description');
  });
})
