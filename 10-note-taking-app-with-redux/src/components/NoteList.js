import React from 'react'
import '../styles/notelist.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../features/notes/notesSlice';

const NoteList = () => {
  const { notes } = useSelector(store => store.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='container mt-3'>
      <span className='text-white fw-semibold'>Create a new note?</span>
      <button
        className='btn text-white ms-3'
        id='create-note-btn'
        onClick={ () => navigate('/create_note') }
        >
        Create Note
      </button>
      <div className='mt-3'>
        {
          notes.length === 0 ? (
            <p className='lead fw-bold text-white text-center'>It appears that you do not have any notes yet.</p>
          ) : (
            <div className='row'>
              {notes.map(note => (
                <div className='col-md-4' key={note.id}>
                  <div className='card mb-3' style={{ minHeight: '300px' }}>
                    <div className='card-body d-flex flex-column justify-content-between' style={{ height: '100%' }}>
                      <div>
                        <h5 className='card-title'>{note.title}</h5>
                        <p className='card-text'>{note.content}</p>
                      </div>
                      <div className='d-flex gap-4'>
                        <button
                          className='btn btn-secondary px-4'
                          onClick={() => navigate(`/edit_note/${note.id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className='btn btn-danger'
                          onClick={ () => dispatch(deleteNote(note.id)) }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NoteList;
