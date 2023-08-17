import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { Link, useNavigate } from 'react-router-dom';
import { addTask } from "../redux";
import { useState } from 'react';

const AddTask = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle the submission of a new post
  // It will first store the object to the localStorage
  // And then it will dispatch the addTask action creator to
  // update the state of the application
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
    dispatch(addTask(newTask));
    navigate('/'); // Send us to the home page after we finish with adding a new task and updating the state/
  }

  return (
    <div className='container'>
      <NavBar />
      <div className='container pt-3' id='create-form-div'>
        <form onSubmit={ (e) => handleSubmit(e) } action="#" className='border border-2 p-5 d-flex flex-column gap-5'>
          <div className='d-flex flex-column gap-2'>
            <label className='d-block'>Task Name</label>
            <input required value={ title } onChange={ (e) => setTitle(e.target.value) } className='form-control' type="text" placeholder='Enter task here'/>
            <label className='pt-3'>Task Description</label>
            <textarea
              required
              className='form-control'
              rows={ 7 }
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
              placeholder='Enter the description here'
            />
          </div>
          <div className='d-flex flex-row justify-content-end'>
            <button type='submit' className='btn btn-dark'>Create Task</button>
          </div>
        </form>
      </div>
      <div className='container'>
        <span className='btn btn-dark'>
          <Link to='/' className='text-decoration-none text-light'>
            Go Back
          </Link>
        </span>
      </div>
    </div>
  )
}

export default AddTask;
