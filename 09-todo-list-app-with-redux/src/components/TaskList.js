import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useEffect} from "react";
import {addTask, toggleTask, deleteTask, toggleCompletion} from "../redux";
import button from "bootstrap/js/src/button";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const showCompleted = useSelector(state => state.showCompleted);
  const dispatch = useDispatch();
  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div className='container mt-4' id='task-list'>
      <div className='d-flex justify-content-between'>
        <h6 className='h6 fs-4'>Task List</h6>
        {
          showCompleted ? (
            <button
              className='btn btn-dark'
              onClick={ () => dispatch(toggleCompletion()) }
            >
              Show All Tasks
            </button>
          ) : (
            <button
              className='btn btn-dark'
              onClick={ () => dispatch(toggleCompletion()) }
            >
              Show Completed
            </button>
          )
        }
      </div>
      <ul className='list-group pt-3 gap-2'>

        {
          filteredTasks.length === 0 ? (
            <p>It appears you do not have any tasks yet.</p>
          ) : (
            filteredTasks.map((task) => (
                <li key={ task.id } className='list-group-item'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <span>
                        <Link className='text-decoration-none text-dark' to={ `/task/${ task.id }` }>
                          {
                            task.completed ? (
                              <span className='text-decoration-line-through'>{ task.title }</span>
                            ) : (
                              task.title
                            )
                          }
                        </Link>
                      </span>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                      <button
                        className='btn btn-dark border border-2 border-dark'
                        onClick={ () => dispatch(toggleTask(task.id)) }
                        >
                        Done
                      </button>
                      <button className='btn btn-danger' onClick={ () => dispatch(deleteTask(task.id)) }>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              )
            )
          )
        }
      </ul>
    </div>
  )
}

export default TaskList;
