import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col font-bold w-1/6'>
    <div class="font-medium text-xl mb-8 text-red-900">
        <h1>
            Business Name
        </h1>
        <h2>
            Address
        </h2>
        <h2>
            City
        </h2>
    </div>
    <Link to="/user" class="border-y border-black py-2">
        Overview
    </Link>
    <Link to="#" class="border-b border-black py-2">
        Business Information
    </Link>
    <Link to="/user/reviews" class="border-b border-black py-2">
        Reviews
    </Link>
    <Link to="/user/photos" class="border-b border-black py-2">
        Photos & Videos
    </Link>
    <Link to="/user/categories" class="border-b border-black py-2">
        Categories
    </Link>
    <div class="border-b border-black py-2">
        Blogs
    </div>
    <div class="border-b border-black py-2">
        Logout
    </div>
</div>
  )
}

export default Sidebar