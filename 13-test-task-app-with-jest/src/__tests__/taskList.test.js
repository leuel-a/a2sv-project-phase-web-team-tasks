import TaskList from "../components/TaskList";
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addTask, toggleTask, deleteTask, toggleCompletion } from "../redux";
import store from "../redux/store";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from "react-router-dom";
import '@testing-library/jest-dom'

const mockStore = configureStore([]);
describe('Task List component', () => {
  afterEach(() => {
    cleanup();
  })

  test('renders tasks to the screen', () => {
    // Create a mock of the state of my Redux store
    // this is because the state of my Redux store is not available in my test environment
    // I will be using this mock state to test my component

    const initalState = {
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is task 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'This is task 2',
          completed: true,
        }
      ],
      showCompleted: false,
    }

    const store = mockStore(initalState);
    render(
      <Provider store={ store }>
        <Router>
          <div className='container w-100' id='main-col'>
            <NavBar />
            <TaskList />
            <div className='container'>
              <span className='pe-4'>Create a new task?</span>
              <span className='btn btn-dark'>
            <Link to='/create_task' className='text-decoration-none text-light'>
              New Task
            </Link>
          </span>
            </div>
          </div>
        </Router>
      </Provider>
    );

    let todoElement = screen.getByTestId('task-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Task 1');
    expect(todoElement).not.toHaveTextContent('This is task 1');

    todoElement = screen.getByTestId('task-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Task 2');
    expect(todoElement).not.toHaveTextContent('This is task 2');
  })

  test('renders a message when there are no tasks', () => {
    const initialState = {
      tasks: [],
      showCompleted: false,
    }

    const store = mockStore(initialState);

    render(
      <Provider store={ store }>
        <Router>
          <div className='container w-100' id='main-col'>
            <NavBar />
            <TaskList />
            <div className='container'>
              <span className='pe-4'>Create a new task?</span>
              <span className='btn btn-dark'>
            <Link to='/create_task' className='text-decoration-none text-light'>
              New Task
            </Link>
          </span>
            </div>
          </div>
        </Router>
      </Provider>
    );

    const noTaskElement = screen.getByTestId('no-task-element');
    expect(noTaskElement).toBeInTheDocument();
    expect(noTaskElement).toHaveTextContent('It appears you do not have any tasks yet.');
  })

  test('test the toggle task action in the show complete button', () => {
    const initialState = {
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is task 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'This is task 2',
          completed: true,
        }
      ],
      showCompleted: true,
    }

    const store = mockStore(initialState);

    render(
      <Provider store={ store }>
        <Router>
          <div className='container w-100' id='main-col'>
            <NavBar />
            <TaskList />
            <div className='container'>
              <span className='pe-4'>Create a new task?</span>
              <span className='btn btn-dark'>
            <Link to='/create_task' className='text-decoration-none text-light'>
              New Task
            </Link>
          </span>
            </div>
          </div>
        </Router>
      </Provider>
    );

    const showCompletedButton = screen.getByTestId('show-all-completed-tasks');
    expect(showCompletedButton).toBeInTheDocument();

    fireEvent.click(showCompletedButton);

    const todoElement = screen.getByTestId('task-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Task 2');
    expect(todoElement).not.toHaveTextContent('This is task 2');

    const taskList = screen.getByTestId('task-list');
    expect(taskList).toBeInTheDocument();
    expect(taskList).not.toHaveTextContent('Task 1');
  })
})
