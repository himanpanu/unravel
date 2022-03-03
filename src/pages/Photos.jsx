import React from 'react'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Photos = () => {
  return (
    <div>
        <Header2/>
        <div className='flex flex-row px-16 py-10 w-full'>
         <Sidebar/>
            <div className='px-10'>
                <h2 className='mb-8 text-5xl text-blue-900 border-b-2 pb-10 pr-20 border-slate-300'>Photos</h2>
                
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Photos