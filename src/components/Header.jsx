
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
      <header>
          <div className='flex justify-between px-8 py-7 text-white bg-red-900'>
              <div className='flex space-x-20'>
                  <div>
                  <a href="/">
                      LOGO
                  </a>
                  </div>
                  <div>
                    <span className='text-lg md:text-3xl'>Discover your Business</span>
                  </div>
              </div>
              <div className='flex space-x-5 items-center'>
                  <Link to="/review" className='hidden md:inline-flex'>
                      Write a Review
                  </Link>
                  <div className='hidden md:inline-flex'>
                      Blogs
                  </div>
                  <Link to="/business" className='hidden md:inline-flex'>
                      Unravel for Business
                    </Link>
                  <Link to="/login">
                      Login
                  </Link>
                  <Link to="/register" className='bg-[#FF952B] text-white px-4 py-1 rounded-full'>
                      Sign Up
                  </Link>
              </div>
          </div>
      </header>
  );
};

export default Header;
