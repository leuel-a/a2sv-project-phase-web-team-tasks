import { useParams, useNavigate } from "react-router";
import NavBar from './NavBar';
import {addTask, editTask} from "../redux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SingleTask = () => {
  const { id } = useParams();
  const tasksJSON = localStorage.getItem('tasks');
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
  const currentTask = tasks.find(task => task.id === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState(currentTask.title);
  const [ description, setDescription ] = useState(currentTask.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }
    const fromStorage = JSON.parse(localStorage.getItem('tasks'));
    const storedTasks = fromStorage != null ? fromStorage : [];
    const newTasks = [ ...storedTasks, newTask ];

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    dispatch(editTask(newTask));
    navigate('/'); // Send us to the home page after we finish with adding a new task and updating the state/
  }

  return (
    <div className='container'>
      <NavBar />
      <div className='container pt-5'>
        <form onSubmit={ (e) => handleSubmit(e) } action="#" className='border border-2 p-5 d-flex flex-column gap-5'>
          <div className='d-flex flex-column gap-2'>
            <label className='d-block'>Task Name</label>
            <input value={ title } onChange={ (e) => setTitle(e.target.value) } className='form-control' type="text" placeholder='Enter task here'/>
            <label className='pt-3'>Task Description</label>
            <textarea
              className='form-control'
              rows={ 7 }
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
              placeholder='Enter the description here'
            />
          </div>
          <div className='d-flex flex-row justify-content-end'>
            <button type='submit' className='btn btn-dark'>Edit Task</button>
          </div>
        </form>
      </div>
      <span>
        <Link to='/' className='btn btn-dark mt-3 ms-3'>
          Go Back
        </Link>
      </span>
    </div>
  )
}

export default SingleTask;
