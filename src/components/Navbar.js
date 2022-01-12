import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-bookmark-white.png';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='container flex items-center py-4 mt-4 sm:mt-12'
      role='navigation'
    >
      <Link to='/' className=''>
        <div className='py-1'>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <div className='hidden md:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs'>
        <Link className='cursor-pointer' to='/'>
          Home
        </Link>
        <Link className='cursor-pointer' to='#'>
          Menu
        </Link>
        <Link className='cursor-pointer' to='#'>
          About
        </Link>
        <Link className='cursor-pointer' to='#'>
          Contact
        </Link>
        <button
          type='button'
          className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'
        >
          Login
        </button>
      </div>
      <div
        className='flex flex-1 justify-end text-2xl cursor-pointer md:hidden'
        onClick={toggle}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
