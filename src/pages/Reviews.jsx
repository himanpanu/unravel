import React from 'react'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Reviews = () => {
  return (
    <div>
        <Header2/>
        <div className='flex flex-row px-16 py-10 w-full'>
         <Sidebar/>
            <div className='px-10'>
                <h2 className='mb-8 text-5xl text-blue-900 border-b-2 pb-10 pr-20 border-slate-300'>Reviews</h2>
                {/* <Rcomp/> */}
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

const Rcomp = (props) => {
    var date = new Date(props.det.createdDate)
    return (
        <div className='text-[0.9rem] my-4'>
              <div>
                  <h4 className='font-bold'>{props.det.firstName +" " + props.det.lastName + " - (" + props.det.ratingStar+")"}</h4>
                  <h5 className='text-xs'>{date.toLocaleDateString()}</h5>
              </div>
              <p className='mt-2'>
              {props.det.message}
              </p>

              <button className='bg-slate-200 py-1 px-2 rounded-md mt-2'>Reply</button>
          </div>
    )
}

export default Reviews