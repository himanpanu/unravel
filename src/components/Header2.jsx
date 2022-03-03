import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

const Header2 = () => {
    const { logout } = useContext(AuthContext);
  return (
    <header className='bg-red-900 text-white'>
          <div className='flex justify-between px-8 py-10 text-white'>
              <div className='flex space-x-20'>
                  <div>
                  <a href="/">
                      LOGO
                  </a>
                  </div>
                  <div className='space-x-10 text-lg'>
                  <Link to="/login">
                      Business Profile
                  </Link>
                  <Link to="/login">
                      Account Setting
                  </Link>
                  </div>
              </div>
              <div className='flex space-x-10 items-center text-lg'>
                  <Link to="/login">
                      Support
                  </Link>
                  <button onClick={logout} className='bg-white text-red-900 px-4 py-1 rounded-full'>
                      Log out
                  </button>
              </div>
          </div>
      </header>
  )
}

export default Header2