import {Link, useParams} from "react-router-dom";
import { useGetPostQuery, useDeletePostMutation, useGetAllPostsQuery } from "../features/apiSlice";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const { refetch } = useGetAllPostsQuery();
  const { data } = useGetPostQuery(id);
  const [ deletePost ] = useDeletePostMutation();
  const navigate = useNavigate();

  const handleDeletePost = () => {
    deletePost(id);
    navigate('/');
    refetch();
  }

  return (
        <div>
            <NavBar />
            <div className="container mt-5">
              <article>
                <h1 className="display-5 fw-bold font-bold">{ data?.title }</h1>
                <p className="lead fs-5 mx-3 mt-5">{ data?.content }</p>
              </article>
              <div className='d-flex justify-content-end mt-5 gap-3'>
                <span className='btn btn-secondary px-4' >
                  <Link className='text-decoration-none text-white' to={ `/post/edit/${id}` }>Edit</Link>
                </span>
                <button className='btn btn-danger' onClick={ () => handleDeletePost() } >Delete Post</button>
              </div>
            </div>
        </div>
    );
}

export default PostDetail;
