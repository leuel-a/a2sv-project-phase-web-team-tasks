import React from 'react';
import { useGetAllPostsQuery, useGetPostQuery, useAddPostMutation } from "../features/apiSlice";
import NavBar from './NavBar';
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading, isError } = useGetAllPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div>
      <NavBar />
      <div className='container pt-3'>
        <h3>Posts</h3>
        <ul className='list-group d-flex flex-column gap-5'>
          {
            data?.map(value => {
              return (
                <li key={ value.id } className='list-group-item border border-dark rounded-2'>
                  <div className='border-bottom mb-2'>
                    <Link
                      className='text-decoration-none text-dark fs-4'
                      to={ `/post/${ value.id }` } >
                      { value.title }
                    </Link>
                  </div>
                  <p>{ value.content }</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home;
