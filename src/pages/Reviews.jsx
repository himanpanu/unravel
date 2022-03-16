import React from 'react'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Reviews = () => {
  return (
    <div className='font-["Arial"]'>
        <Header2/>
        <div className='flex flex-row px-16 py-10 w-full'>
         <Sidebar/>
            <div className='px-10 w-4/5'>
                <h2 className='mb-8 text-5xl text-blue-900 border-b-2 pb-10 pr-20 border-slate-300'>Reviews</h2>
                {/* <Rcomp/> */}
                <div className='pl-10 pt-4 w-full'>
                    <div className='flex text-slate-500 text-sm space-x-16 px-10 py-4 shadow-md rounded-md'>
                        <div>All</div>
                        <div>Replied</div>
                        <div>Haven't</div>
                    </div>
                    <div className='flex flex-col shadow-md mt-4 text-sm rounded-md border border-slate-200'>
                        <div className='flex px-5 py-4 pb-6 space-x-4 border-b border-b-slate-200'>
                            <div><img className='h-12 w-12 pt-4 rounded-md contain' src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"/></div>
                            <div>
                                <h1>Himekashi Shayr</h1>
                                <div className='flex space-x-4 items-center mb-2'>
                                    <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    </span>
                                    <span className='text-xs text-slate-500'>27 weeks ago</span>
                                </div>
                                <h4 className='font-italic text-slate-600 mb-8'>The user didn't write a review and has left just a rating.</h4>
                                <span className='text-blue-500 border border-slate-300 rounded-md py-2 mt-4 px-4'>Reply</span>
                            </div>
                        </div>
                        <div className='flex px-5 py-4 pb-6 space-x-4 border-b border-b-slate-200'>
                            <div><img className='h-12 w-12 pt-4 rounded-md contain' src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"/></div>
                            <div>
                                <h1>Himekashi Shayr</h1>
                                <div className='flex space-x-4 items-center mb-2'>
                                    <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    </span>
                                    <span className='text-xs text-slate-500'>27 weeks ago</span>
                                </div>
                                <h4 className='font-italic text-slate-600 mb-8'>The user didn't write a review and has left just a rating.</h4>
                                <span className='text-blue-500 border border-slate-300 rounded-md py-2 mt-4 px-4'>Reply</span>
                            </div>
                        </div>
                        <div className='flex px-5 py-4 pb-6 space-x-4 border-b border-b-slate-200'>
                            <div><img className='h-12 w-12 pt-4 rounded-md contain' src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"/></div>
                            <div>
                                <h1>Himekashi Shayr</h1>
                                <div className='flex space-x-4 items-center mb-2'>
                                    <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(240,196,53,1)"/></svg>
                                    </span>
                                    <span className='text-xs text-slate-500'>27 weeks ago</span>
                                </div>
                                <h4 className='font-italic text-slate-600 mb-8'>The user didn't write a review and has left just a rating.</h4>
                                <span className='text-blue-500 border border-slate-300 rounded-md py-2 mt-4 px-4'>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
              
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