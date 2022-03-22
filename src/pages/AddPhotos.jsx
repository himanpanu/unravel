import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const AddPhotos = () => {
  return (
    <div className='font-["Arial"] flex flex-col justify-center'>
        <Header/>
        <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
        <div className='flex flex-row px-16 py-10 w-5/6 space-betwwen self-center bg-white mt-20'>
         <Sidebar/>
            <div className='px-10 pb-20'>
                <div className='flex justify-between items-start'>
                <h2 className='mb-8 text-4xl text-[#263248] pr-20'>Photos</h2>
                    <div className='flex text-sm space-x-8'>
                       
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <label for="image" className='text-[#263248] text-lg'>Choose the Image File</label>
                    <input name="image" type="file" placeholder='upload image'/>
                </div>
                <div className='mt-10'>
                <span className='cursor-pointer bg-[#051D4D] text-white rounded-md py-3 px-6'>Add Photo</span>
                </div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AddPhotos