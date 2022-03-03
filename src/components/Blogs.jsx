import React from 'react';
import { blogs } from '../imgs';

const Blogs = () => {
  return <section className='bg-white flex flex-col justify-center items-center space-y-3'>
  <div className='text-blue-900 text-3xl font-medium mt-10'>Blogs by Unravel</div>
  <div className='flex space-x-10 justify-around pb-28 pt-10 px-60'>{blogs.map((value) => {
    return (<BlogCard key={value.id} image={value.url} {...value}/>)
  })}</div>
  
</section>;;
};

const BlogCard = (props) => {
    return <div className='rounded-xl'>
      <img className="h-3/5 contain rounded-t-md border-slate-600 border" src={props.image} />
      <footer className='flex flex-col items-center justify-around bg-white py-2 text-sm text-blue-900 rounded-b-md space-y-2 border-t-white border-slate-600 border pb-6'>
          <div className='text-sm font-medium px-2'>{props.name}</div>
          <div className='text-lg pb-1 px-2'>{props.description}</div>
          <div className='text-xs font-medium pb-1 px-2'>{props.created_at}</div>
          <span className='bg-blue-900 text-white w-fit text-[0.8rem] px-4 py-[0.1rem]'>Read More..</span>
      </footer>
    </div>;
}
    

export default Blogs;
