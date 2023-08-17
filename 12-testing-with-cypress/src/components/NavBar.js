import '../styles/navbar.css';
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg nav-bar-css mx-4 rounded-bottom-3 '>
      <div className='d-flex justify-content-between w-100 px-5'>
        <div>
          <Link id='nav-brand' to='/' className='navbar-brand text-decoration-none text-white px-5 fs-2'>A2SV Note Taking Application</Link>
        </div>
        <div className='d-flex align-items-center gap-3' id='nav-btns'>
          <button className='btn text-white fw-bold'>Register</button>
          <button className='btn text-white fw-bold px-3'>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

