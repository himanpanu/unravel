import React, { useEffect, useState } from 'react';

const Businessbanner = (props) => {
  const [explore, setExplore] = useState()

  useEffect(async() => {
    await fetch('https://finalexam.online/onlinebusiness/explore')
    .then(response => response.json())
    .then(data => setExplore(data.data))
  })

  return <section className='bg-slate-200 h-3/4 flex flex-col justify-center items-center space-y-5'>
      <div className='text-blue-900 text-3xl font-bold mb-10 mt-5'>Find the Best Business in Town</div>
      <div className='flex items-start w-full px-10 mx-10 pb-5 overflow-x-auto overflow-y-hidden'>{explore && explore.map((value) => {
        return (<Article2 key={value.id} rating={value.ratingAverage} image={value.headerUrl[0]} reviews={value.reviewCount} {...value}/>)
      })}</div>
      
  </section>;
};

const Article2 = (props) => {
  return <a href={'about-business/'+props.id}><div className='rounded-xl mb-8 w-56 mx-4'>
  <img className="max-w-56 contain rounded-t-md border-slate-200 border" src={props.image} />
  <footer className='flex flex-col justify-around bg-white py-2 text-sm text-blue-900 rounded-b-md space-y-2 border-t-white border'>
      <div className='text-lg font-medium px-2'>{props.name}</div>
      <div className='text-xs font-medium pb-1 px-2'>{props.address != "" ? props.address : "NA"}</div>
      <div className='flex font-medium justify-between text-xs pt-2 border-t-slate-200 border-white border'>
          <div className='bg-purple-700 rounded-sm text-white p-0.5 ml-2'>
              {props.rating}
          </div>
          <div className='mr-2'>
              {props.reviews} reviews
          </div>
      </div>
  </footer>
</div></a>;
}

export default Businessbanner;
