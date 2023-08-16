import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { editNote } from '../features/notes/notesSlice';
import NavBar from './NavBar';

const EditNote = () => {
  const { id } = useParams();
  const { notes } = useSelector(state => state.notes);
  const note = notes.find(note => note.id === Number(id));

  const [ title, setTitle ] = useState(note.title);
  const [ content, setContent ] = useState(note.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { id, title, content };
    dispatch(editNote({
      id: Number(id),
      updatedNote: newNote,
    }));
    navigate('/');
  }

  return (
    <div>
      <NavBar />
      <div className='container border rounded-3 mt-5 text-white' style={{ width: '540px', height: '540px' }}>
        <form onSubmit={ (e) => handleSubmit(e) } className='p-4'>
          <div>
            <label className='fw-bold'>Note Title</label>
            <input
              type='text'
              className='form-control mt-2'
              value = { title }
              onChange = { (e) => setTitle(e.target.value) }
            />
          </div>
          <div>
            <label className='fw-bold mt-4'>Note Content</label>
            <textarea
              rows={ 10 }
              type='text' className='form-control mt-2'
              value = { content }
              onChange = { (e) => setContent(e.target.value) }
            />
          </div>
          <div className='d-flex mt-5 justify-content-end'>
            <button
              type='submit'
              id='create-note-btn'
              className='btn text-white fw-semibold'
            >
              Edit Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditNote

