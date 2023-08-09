'use client';

import { savePost } from "../../../utils/storageFunctions";
import {useState, useEffect, FormEvent} from "react";
import { Post } from  '@/models/models';
import { useRouter } from 'next/navigation';
import { getStoredPosts, storePosts } from '../../../utils/storageFunctions';

export default function NewPost() {
  const [ title, setTitle ] = useState<string>('');
  const [ body, setBody ] = useState<string>('');
  const router = useRouter();

  const handleCreateNewPost = (e: FormEvent<HTMLFormElement>) => {
    // Some logic to handle creating a new post.
    e.preventDefault();
    const newPost: Post = {
      title,
      body,
      id: Date.now(),
      userId: Date.now(),
    }
    const storedPosts = getStoredPosts();
    const updatedPost = [ ...storedPosts, newPost ];
    storePosts(updatedPost);
    router.push('/');
  }

  return (
    <div className='container mt-5'>
      <div className='row d-flex align-items-start'>

        <form onSubmit={ (e) => handleCreateNewPost(e) } action="" className='container bg-light border border-2 rounded-4 p-3' style={{ maxWidth: '540px' }}>
          <fieldset>
            <legend className='fw-bold'>Create a new Post</legend>

            <div className='form-control border-0'>
              <label htmlFor='post-title'>Title</label>
              <input
                type='text'
                id='post-title'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                className='form-control'
              />
            </div>

            <div className='form-control border-0'>
              <label htmlFor="post-description">Content</label>
              <textarea
                id='post-description'
                rows={ 10 }
                className='form-control'
                value={ body }
                onChange={ (e) => setBody(e.target.value) }
              />
            </div>

            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-dark me-2 mt-3'>Create Post</button>
            </div>

          </fieldset>
        </form>

        <div className="col-md-4 bg-light p-4 border rounded shadow">
          <h3 className="mb-3 text-center">How to Create a New Post</h3>
          <p className="lead text-center" style={{ fontSize: '15px' }} >
            To create a new post, simply fill out the form on the left. Enter a meaningful title for your post and click <strong>Create Post</strong>. Your new post will be saved and can be viewed on the home page.
          </p>
        </div>

      </div>
    </div>
  )
}
