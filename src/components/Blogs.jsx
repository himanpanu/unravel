import React from 'react';
import { blogs } from '../imgs';

const Blogs = () => {
  return <section className='bg-white flex flex-col justify-center items-center space-y-3'>
  <div className='text-[#222222] text-3xl font-bold mt-10'>Latest Reviews</div>
  <div className='text-[#555555]'>Review that matters</div>
  <div className='flex space-x-12 justify-around pb-28 pt-10 px-20'>{blogs.map((value) => {
    return (<BlogCard key={value.id} image={value.url} {...value}/>)
  })}</div>
  
</section>;
};

const BlogCard = (props) => {
    return <div className='rounded-md shadow-md px-8 py-6'>
      <div className='flex space-x-4'>
      <img className="h-16 w-16 contain rounded-full" src={props.image} />
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
</span><span className='text-[#999] text-sm'>4.5/5.0</span></div>
        <h1 className='text-sm font-bold text-[#555555] mt-2'>Shops</h1>
      </div>
      </div>
      
      <footer className='flex flex-col justify-around bg-white py-2 text-sm rounded-b-md space-y-2 pb-6 mt-2'>
         <div className='flex space-x-2 items-center'>
            <h1 className='text-base font-bold'>Jon Doe</h1>
            <h2 className='text-sm text-[#999]'>reviewd</h2>
         </div>
         <div className='font-bold text-xl'>
           "Great Experience"
         </div>
         <div className='text-lg text-[#999] pb-4'>
           I really liked the place ce lot as it covered all things i wanted
         </div>
         <div className='flex justify-between items-center'>
            <div className='text-xs font-semibold text-[#999]'>Published : 26 February 2022</div>
            <div className='bg-blue-600 text-white text-xs py-1 rounded-md px-3 cursor-pointer font-semibold'>Read Reviews</div>
         </div>
      </footer>
    </div>;
}
    

export default Blogs;
