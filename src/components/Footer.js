import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-bookmark-white.png';

const Footer = () => {
  return (
    <footer className='bg-bookmark-blue py-8'>
      <div className='container flex flex-col md:flex-row items-center justify-items-center'>
        <div className='flex flex-1 flex-wrap items-center justify-items-center gap-12'>
          <Link to='/' className=''>
            <img src={logo} alt='logo' />
          </Link>
          <div className='flex text-white uppercase gap-6 md:gap-12 px-16 text-xs'>
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
          </div>
        </div>

        <div className='flex gap-10 mt-12 md:mt-0 text-3xl'>
          <div className='text-blue-400'>
            <Link to='/'>
              <i class='bx bxl-twitter'></i>
            </Link>
          </div>
          {/* <div>
            <i class='bx bxl-instagram-alt'></i>
          </div> */}
          <div className='text-blue-700'>
            <Link to='/'>
              <i class='bx bxl-facebook-circle'></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
