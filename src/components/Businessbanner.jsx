import React, { useEffect, useState } from 'react';

const Businessbanner = (props) => {

  return <section className='bg-[#EEF0F7] h-full flex flex-col justify-center items-center space-y-3'>
      <div className='text-[#222222] text-4xl mt-4 font-sans font-bold'>Find the Best Businesses</div>
      <div className='pb-6 text-[#555555]'>Famous Shops</div>
      <div className='flex space-x-16'>
        <div className='flex w-72 h-44 bg-cover rounded-lg' style={{backgroundImage: "url('images/Home-image2.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Clothing Store ADC</h1>
        </div>
        <div className='flex w-72 h-44 bg-cover rounded-lg' style={{backgroundImage: "url('images/Home-image3.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Vegetable Store ADC</h1>
        </div>
        <div className='flex w-72 h-44 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('images/Home-image4.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Coffee Store ADC</h1>
        </div>
      </div>
      <div className='flex space-x-16 pt-6'>
        <div className='flex w-72 h-44 bg-cover rounded-lg' style={{backgroundImage: "url('images/Home-image5.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Fast Food Store ADC</h1>
        </div>
        <div className='flex w-72 h-44 bg-cover rounded-lg' style={{backgroundImage: "url('images/Home-image6.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Cloth Store ADC</h1>
        </div>
        <div className='flex w-72 h-44 bg-cover rounded-lg' style={{backgroundImage: "url('images/Home-image7.jpg')"}}>
          <h1 className='text-white text-center  font-semibold w-full bg-slate-800 self-end rounded-lg bg-opacity-30 py-2'>Food Store ADC</h1>
        </div>
      </div>
      
  </section>;
};


export default Businessbanner;
