import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark px-5'>
      <Link className='text-decoration-none text-white fs-5 py-2' to='/'>Blog Application</Link>
      <Link className='text-decoration-none text-dark btn btn-light ms-4' to='/create_blog'>Create Blog</Link>
    </nav>
  )
}

export default NavBar;
