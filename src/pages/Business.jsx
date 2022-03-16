import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Business = () => {
  return <div className='h-screen font-["Arial"]'>
      <Header/>
      <div style={{backgroundImage: "url(/images/store.jpg)"}} className={'bg-cover flex bg-center h-4/6 items-end justify-end'}>
          <div className='bg-white w-1/3 mr-10 mb-10 p-10'>
            <h1 className='text-4xl font-bold'>Lets get back to business</h1>
            <p className='mb-5 mt-5 text-sm'>Lorem ipsum is simply Lorem ipsum is simplyLorem ipsum is simplyLorem ipsum is simplyLorem ipsum is simplyLorem ipsum is simply</p>
            <button className='px-10 py-1 bg-orange-700'>Here</button>
          </div>
  </div>
  <div className='h-4/5 px-20 flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold mb-14 w-2/3 text-center'>
      Get discovered by millions of people ready to buy, visit & hire
    </h1>
    <img src="/images/store.jpg" className='contain w-1/2'/>
  </div>
  <div className='flex flex-col px-20 pb-10'>
    <h1 className='text-3xl font-bold mb-20 mx-48 text-center'>Unravel makes it easy to connect with new customers & grow your business</h1>
    <div className='flex flex-col mb-20'>
      <div className='flex'>
        <div>
          <img src="/images/serve.jpg" className='contain w-2/3'/>
        </div>
        <div className='flex flex-col justify-center mb-3'>
          <h1 className='text-3xl font-bold mb-6'>Help People get to know you</h1>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard summy</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='underline'>Read More</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col mb-20'>
      <div className='flex'>
        <div>
          <img src="/images/serve.jpg" className='contain w-2/3'/>
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold mb-6'>Help People get to know you</h1>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard summy</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='underline'>Read More</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col mb-20'>
      <div className='flex'>
        <div>
          <img src="/images/serve.jpg" className='contain w-2/3'/>
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold mb-6'>Help People get to know you</h1>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard summy</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='mb-6'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
          <p className='underline'>Read More</p>
        </div>
      </div>
    </div>
  </div>

  <div className='flex flex-col justify-center items-center px-20 py-10 bg-slate-200'>
    <h1 className='text-3xl font-bold mb-5'>Find the right solutions for your business</h1>
    <div className='flex flex-row mt-10 space-x-5'>
      <div className='flex flex-col items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"/></svg>
        <h3 className='text-lg font-bold mb-4 mt-4'>Restaurants & Nightlife</h3>
        <p className='text-center'>
          Turn searches into diners & diners into regulars with & front-of-house tools like waitlist
        </p>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"/></svg>
        <h3 className='text-lg font-bold mb-4 mt-4'>Restaurants & Nightlife</h3>
        <p className='text-center'>
          Turn searches into diners & diners into regulars with & front-of-house tools like waitlist
        </p>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"/></svg>
        <h3 className='text-lg font-bold mb-4 mt-4'>Restaurants & Nightlife</h3>
        <p className='text-center'>
          Turn searches into diners & diners into regulars with & front-of-house tools like waitlist
        </p>
      </div>
    </div>
  </div>

  <div className='px-20 flex flex-col justify-center items-center py-10'>
    <h1 className='mb-16 text-3xl font-bold'>Learn how to market your business on travel like a pro</h1>
    <div className='flex flex-row space-x-10 justify-center items-center'>
    <div className='border border-black w-64 rounded-md'>
      <img src='images/store.jpg' className='contain'/>
      <div className='px-4 py-3'>
      <p className='text-sm'>How to list your business in 2 minutes...</p>
      <span className='text-sm underline'>Read more</span>
      </div>
    </div>
    <div className='border border-black w-64 rounded-md'>
      <img src='images/store.jpg' className='contain'/>
      <div className='px-4 py-3'>
      <p className='text-sm'>How to list your business in 2 minutes...</p>
      <span className='text-sm underline'>Read more</span>
      </div>
    </div>
    <div className='border border-black w-64 rounded-md'>
      <img src='images/store.jpg' className='contain'/>
      <div className='px-4 py-3'>
      <p className='text-sm'>How to list your business in 2 minutes...</p>
      <span className='text-sm underline'>Read more</span>
      </div>
    </div>
    </div>
  </div>

 <Footer/>
  </div>;
};

export default Business;
