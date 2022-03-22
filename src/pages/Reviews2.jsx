import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'
import Sidebar2 from '../components/Sidebar2'
import { blogs } from '../imgs'

const Reviews2 = () => {
  const { setUser, user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(async() => {
    await axios.get("https://finalexam.online/review/user/shivaambi@gmail.com")
    .then(response => {
      setReviews(response.data.data)
      console.log(response.data.data)
    })
    })

  return (
    <div className='font-["Arial"] flex flex-col justify-center'>
        <Header/>
        <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
        <div className='flex flex-row px-16 py-10 w-5/6 justify-center self-center bg-white mt-20 border border-slate-200 shadow-md'>
         <Sidebar2/>
            <div className='px-10 w-4/5'>
            <h2 className='mb-2 text-4xl text-[#263248] pr-20'>All Reviews</h2>
                {/* <Rcomp/> */}
                <div className='pt-4 w-full'>
                <div className='flex flex-col space-y-12 justify-around pb-4 pt-4'>{(reviews).map((value) => {
    return (<BlogCard key={value.id} image={value.url} {...value}/>)
  })}</div>
                </div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

const BlogCard = (props) => {
    return <div className='rounded-md shadow-md px-8 py-6'>
      <div className='flex space-x-4'>
      <img className="h-16 w-16 contain rounded-full" src="/images/auto.jpg" />
      <div>
        <div className='flex space-x-4'><span className='flex space-x-1'><span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm py-1'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
</span><span className='text-[#999] text-sm'>{props.ratingStar}/5.0</span></div>
        <h1 className='text-sm font-bold text-[#555555] mt-2'>Shops</h1>
      </div>
      </div>
      
      <footer className='flex flex-col justify-around bg-white py-2 text-sm rounded-b-md space-y-2 pb-6 mt-2'>
         <div className='flex space-x-2 items-center'>
            <h1 className='text-base font-bold'>{props.businessName}</h1>
            <h2 className='text-sm text-[#999]'>reviewd</h2>
         </div>
         <div className='font-bold text-xl'>
           "Great Experience"
         </div>
         <div className='text-lg text-[#999] pb-4'>
           {props.message}
         </div>
         <div className='flex justify-between items-center'>
            <div className='text-xs font-semibold text-[#999]'>Published : 26 February 2022</div>
            <div className='bg-blue-600 text-white text-xs py-1 rounded-md px-3 cursor-pointer font-semibold'>Read Reviews</div>
         </div>
      </footer>
    </div>;
}
    

export default Reviews2