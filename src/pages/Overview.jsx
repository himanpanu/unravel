import React from 'react'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Overview = () => {
  return (
    <div className='font-["Arial"]'>
        <Header2/>
        <div className='flex flex-row px-16 py-10 w-full pb-36'>
         <Sidebar/>
            <div className='px-10'>
                <h2 className='mb-8 text-5xl text-blue-900 border-b-2 pb-10 pr-20 border-slate-300'>Business Information</h2>
                
                <div className='text-xl mb-10'>
                    <h3 className='mb-4 font-semibold text-3xl'>Business information</h3>
                    <h4>
                        Business Name
                    </h4>
                    <h4>
                        Address Line 1
                    </h4>
                    <h4>
                        Address Line 2
                    </h4>
                    <h4>
                        Pinched City
                    </h4>
                </div>
                <div className='text-xl font-bold'>
                    <h3 className='text-2xl font-semibold mb-4'>Customers can visit : Yes</h3>
                    <h4>Phone Number</h4>
                    <h4>Website</h4>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Overview