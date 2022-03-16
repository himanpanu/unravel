import React from 'react'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Categories = () => {
  return (
    <div className='font-["Arial"]'>
        <Header2/>
        <div className='flex flex-row px-16 py-10 w-full'>
         <Sidebar/>
            <div className='px-10 w-5/6'>
                <h2 className='mb-8 text-5xl text-blue-900 border-b-2 pb-10 pr-20 border-slate-300'>Categories</h2>
                <div className='border-2 text-lg text-[0.99rem] text-slate-700 border-slate-300 rounded w-2/3 ml-10'>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2 bg-slate-200'>
                        <h3 className='text-slate-900'>Software Company</h3>
                        <p className='text-xs'>Primary Category</p>
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        Software Development
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        Website Development
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        Social Media Development
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        Custom LMS Support
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        E-Commerce Website Development
                    </div>
                    <div className='border-b-2 border-slate-300 pb-2 pl-4 pt-2'>
                        Education Consultancy
                    </div>
                    <div className='pl-4 py-2 text-blue-500'>
                        + Add another service
                    </div>
                </div>
                <div className='text-blue-500 py-1 text-sm px-2 border rounded border-slate-300 mt-4 w-max ml-10'> Add Another business category</div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Categories