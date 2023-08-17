import React, { useState } from 'react'
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/createNote.css';


const CreateNote = () => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { id: Date.now() ,title, content };
    dispatch(addNote (note));
    navigate('/');
  }


  return (
    <div>
      <NavBar />
      <div className='container border rounded-3 mt-5 text-white' style={{ width: '540px', height: '540px' }}>
        <form onSubmit={ (e) => handleSubmit(e) } className='p-4'>
          <div data-test='create-new-note'>
            <label className='fw-bold'>Note Title</label>
            <input
              required
              name='title'
              type='text'
              className='form-control mt-2'
              value = { title }
              onChange = { (e) => setTitle(e.target.value) }
            />
          </div>
          <div>
            <label className='fw-bold mt-4'>Note Content</label>
            <textarea
              required
              data-test='create-note-content'
              name='content'
              rows={ 10 }
              type='text' className='form-control mt-2'
              value = { content }
              onChange = { (e) => setContent(e.target.value) }
            />
          </div>
          <div className='d-flex mt-5 justify-content-end'>
            <button
              data-test='create-note-btn'
              type='submit'
              id='create-note-btn'
              className='btn text-white fw-semibold'
            >
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNote;

