import React, { useState } from 'react';
import NavBar from './NavBar';
import { useAddPostMutation, useGetAllPostsQuery } from "../features/apiSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ addPost ] = useAddPostMutation();
  const navigate = useNavigate();
  const { refetch } = useGetAllPostsQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ id: Date.now, title, content, authorId: Date.now() })
    refetch();
    navigate('/');
  }

  return (
    <div>
     <NavBar />
      <div className='container mt-5'>
        <form onSubmit={ (e) => handleSubmit(e) } action="">
          <div>
            <label>Title</label>
            <input
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
              placeholder='Note title goes here...'
              type="text"
              className='form-control'
            />
          </div>
          <div>
            <label htmlFor="">Content</label>
            <textarea
              value={ content }
              onChange={ (e) => setContent(e.target.value) }
              placeholder='Note content goes here...'
              className='form-control'
              cols="30"
              rows="10">
            </textarea>
          </div>
          <div className='d-flex justify-content-end mt-4'>
            <button type='submit' className='btn btn-dark'>Create Note</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog;
