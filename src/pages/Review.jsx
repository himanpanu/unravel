import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Review = () => {
  return (
    <div className='h-screen'>
        <Header/>
        <section  className=' bg-slate-200 h-4/6 '>
      <div className='flex flex-col h-full items-center justify-center space-y-16'>
        <div className='text-black flex flex-row items-center space-y-3 px-40'>
            <div>
            <h2 className='text-4xl font-bold mb-8'>Your first review Awaits</h2>
          <h4 className='text-xl'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy</h4>
            </div>
            <div>
                <p className='h-40 w-96 bg-white rounded-lg p-10' contenteditable="true">Here</p>
            </div>
          
        </div>
        <div className='flex justify-between bg-white w-4/6 p-3 rounded-lg'>
          <input
            className='border-2 border-blue-900 rounded-sm px-2 w-3/6'
            placeholder='Search paintings,books,'
          />
          <input
            className='border-2 border-blue-900 rounded-sm px-2'
            placeholder='Select Location'
          />
          <span className='text-white bg-[#FF952B] py-2 px-6'>
            Search Here
          </span>
        </div>
      </div>
  </section>
  <Footer/>
    </div>
  )
}

export default Review