import React, {useState, useEffect} from 'react';
import {listing} from '../imgs';

const Listing = () => {
  const [explore, setExplore] = useState()

  useEffect(async() => {
    await fetch('https://finalexam.online/onlinebusiness/explore')
    .then(response => response.json())
    .then(data => setExplore(data.data))
  })

  return <section className='bg-white h-5/6 flex flex-col justify-center items-center space-y-3'>
  <div className='text-[#444] text-3xl font-medium'>Explore</div>
  <div className='text-[#444] text-xl'>It is a long established fact that reader are distracted</div>
  <div className='flex items-start w-full px-10 pt-5 mx-10 pb-5 overflow-x-auto overflow-y-hidden'>{explore && explore.map((value) => {
        return (<Article2 key={value.id} rating={value.ratingAverage} image={value.headerUrl[0]} reviews={value.reviewCount} {...value}/>)
      })}</div>
  
</section>;
};

const Article2 = (props) => {
  return <a href={'about-business/'+props.id}><div className='rounded-xl mb-8 w-56 mx-4'>
  <img className="max-w-56 contain rounded-t-md border-slate-200 border" src={props.image} />
  <footer className='flex flex-col justify-around bg-white py-2 text-sm text-[#444] rounded-b-md space-y-2 border-t-white border'>
      <div className='text-lg font-medium px-2'>{props.name}</div>
      <div className='text-xs font-medium pb-1 px-2'>{props.address != "" ? props.address : "NA"}</div>
      <div className='flex font-medium justify-between text-xs pt-2 border-t-slate-200 border-white border'>
          <div className='bg-blue-900 px-2 rounded-sm text-white p-0.5 ml-2'>
              {props.rating !== 0 ? props.rating : "NA"}
          </div>
          <div className='mr-2'>
              {props.reviews} reviews
          </div>
      </div>
  </footer>
</div></a>;
}

export default Listing;
