import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar2 = () => {
  return (
    <div className='flex flex-col w-1/5 text-[#263248]'>
    <div class="font-medium mb-8 flex space-x-2 items-center">
        <div className='w-20 h-20 border border-[#707070] rounded-full'>

        </div>
        <div className='text-sm'>
         <h1 className='text-slate-500'>Hello,</h1>
         <h1>Jessica Albertoz</h1>
        </div>
    </div>
    <Link to="/user" class=" py-2">
        Bookmarks
    </Link>
    <Link to="/user/reviews" class=" py-2">
        Reviews
    </Link>
    <Link to="/user/business" class=" py-2">
        Business
    </Link>
    <div class="py-2">
        Logout
    </div>
</div>
  )
}

export default Sidebar2