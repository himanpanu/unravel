
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
      <header className="font-roboto">
          <div className='flex justify-between px-8 py-7 text-[#020202] bg-white'>
              <div className='flex space-x-20'>
                  <div>
                    <span className='text-lg md:text-2xl font-bold'>UNRAVEL</span>
                  </div>
              </div>
              <div className='flex space-x-8 items-center text-[0.974rem]'>
                <Link to="/" className='hidden md:inline-flex'>
                      Home
                  </Link>
                  <Link to="/review" className='hidden md:inline-flex'>
                      Write a Review
                  </Link>
                  <div className='hidden md:inline-flex'>
                      Blogs
                  </div>
                  <Link to="/business" className='hidden md:inline-flex'>
                      Unravel for Business
                    </Link>
                  <Link to="/login" className='bg-[#3578F8] text-white px-6 py-1 rounded-md'>
                      Login
                  </Link>
                  <Link to="/register" className='bg-[#051D4D] text-white px-6 py-1 rounded-md'>
                      Sign Up
                  </Link>
              </div>
          </div>
      </header>
  );
};

export default Header;
