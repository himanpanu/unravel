import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar2 from '../components/Sidebar2'
import { blogs } from '../imgs'

const Bookmarks = () => {
  const { setUser, user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(async() => {
    await axios.get("https://finalexam.online/reaction/shivaambi@gmail.com/businesses")
    .then(response => {
      setReviews(response.data.data)
    })
    })

  return (
    <div className='font-["Arial"] flex flex-col justify-center'>
        <Header/>
        <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
        <div className='flex flex-row px-16 py-10 w-5/6 justify-center self-center bg-white mt-20 border border-slate-200 shadow-md'>
         <Sidebar2/>
            <div className='px-10 w-4/5'>
            <h2 className='mb-2 text-4xl text-[#263248] pr-20'>Bookmarks</h2>
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
        <div className='flex justify-between items-center'>
      <div className='flex space-x-4 items-center'>
      <img className="h-16 w-16 contain rounded-full" src={props.thumbnailUrl} alt="/images/auto.jpg" />
      <div className='font-bold text-xl'>
           {props.name}
         </div>
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
</span><span className='text-[#999] text-sm'>{props.ratingAverage} / 5.0</span></div>
        
      </div>
      
      </div>
      <div className='items-end'>
      <svg width="16" height="20" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.46 0.203133C20.7258 0.202352 20.9889 0.256129 21.233 0.361133C21.6059 0.503227 21.9273 0.754509 22.155 1.08213C22.3807 1.4006 22.5006 1.78185 22.498 2.17213V24.8291C22.5006 25.2194 22.3807 25.6007 22.155 25.9191C21.9628 26.1899 21.7076 26.4098 21.4114 26.56C21.1153 26.7101 20.7871 26.786 20.455 26.7811C19.9155 26.7884 19.3941 26.5867 19 26.2181L11.248 18.7651L3.50004 26.2181C3.10699 26.5928 2.58407 26.8007 2.04104 26.7981C1.77528 26.7989 1.51218 26.7451 1.26804 26.6401C0.895166 26.498 0.573832 26.2468 0.346041 25.9191C0.119592 25.6009 -0.00141348 25.2197 4.1394e-05 24.8291V2.17213C-0.00255894 1.78185 0.117414 1.4006 0.343041 1.08213C0.571097 0.75435 0.892799 0.503054 1.26604 0.361133C1.51018 0.256129 1.77328 0.202352 2.03904 0.203133H20.46Z" fill="#1354D1"/>
</svg>

      </div>
      </div>
    </div>;
}
    

export default Bookmarks