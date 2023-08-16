import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useGetAllPostsQuery, useGetPostQuery, useUpdatePostMutation } from "../features/apiSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { refetch } = useGetAllPostsQuery();
  const { data: post, isLoading, isError, refetch: postRefetch } = useGetPostQuery(id);
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ updatePost ] = useUpdatePostMutation();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (isLoading) {
    return <div>Loading...</div>;

  }
  if (isError) {
    return <div>Error fetching data.</div>;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost({ id, title, content });
    navigate(`/`);
    postRefetch();
    refetch();
  }

  return (
    <div>
      <NavBar />
      <div className='container pt-5'>
        <h3>Edit Post: { post.title }</h3>
        <form onSubmit={ (e) => handleSubmit(e) } action="">
          <div>
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
              className='form-control'/>
          </div>
          <div className='pt-4'>
            <label htmlFor="">Content</label>
            <textarea
              value={ content }
              onChange={ (e) => setContent(e.target.value) }
              rows="10" className='form-control'></textarea>
          </div>
          <div className='pt-4'>
            <button className='btn btn-dark'>Update Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost;
