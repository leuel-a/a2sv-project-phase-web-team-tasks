import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useEffect} from "react";
import {addTask, toogleTask, deleteTask} from "../redux";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className='container mt-4' id='task-list'>
      <h6 className='h6 fs-4'>Task List</h6>
      <ul className='list-group pt-3 gap-2'>
        {
          tasks.length === 0 ? (
            <p>It appears you do not have any tasks yet.</p>
          ) : (
            tasks.map((task) => (
              <li key={ task.task.id } className='list-group-item'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <span>
                      <Link className='text-decoration-none text-dark' to={ `/task/${ task.task.id }` }>
                        {
                          task.task.completed ? (
                            <span className='text-decoration-line-through'>{ task.task.title }</span>
                          ) : (
                            task.task.title
                          )
                        }
                      </Link>
                    </span>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <button
                      className='btn btn-dark border border-2 border-dark'
                      onClick={ () => dispatch(toogleTask(task.task.id)) }
                      >
                      Done
                    </button>
                    <button className='btn btn-danger' onClick={ () => dispatch(deleteTask(1691969150287)) }>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}

export default TaskList;
