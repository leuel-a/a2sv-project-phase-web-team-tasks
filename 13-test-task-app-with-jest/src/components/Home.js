import store from "../redux/store";
import NavBar from "./NavBar";
import TaskList from "./TaskList";
import {Provider} from "react-redux";
import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  return (
    <Provider store={ store }>
      <div className='container w-100' id='main-col'>
        <NavBar />
        <TaskList />
        <div className='container'>
          <span className='pe-4'>Create a new task?</span>
          <span className='btn btn-dark'>
            <Link to='/create_task' className='text-decoration-none text-light'>
              New Task
            </Link>
          </span>
        </div>
      </div>
    </Provider>
  )
}

export default Home;
