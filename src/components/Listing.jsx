import React from 'react';
import {listing} from '../imgs';
import Article2 from './Article2';

const Listing = () => {
  return <section className='bg-white h-5/6 flex flex-col justify-center items-center space-y-3'>
  <div className='text-blue-900 text-3xl font-medium'>Our Latest Listings</div>
  <div className='text-blue-900 text-xl'>It is a long established fact that reader are distracted</div>
  <div className='flex justify-around w-4/6 space-x-20 pb-5 pt-10'>{listing.map((value) => {
    return (<Article2 key={value.id} image={value.url} {...value}/>)
  })}</div>
  
</section>;
};

export default Listing;
