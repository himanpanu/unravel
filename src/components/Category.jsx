import React from 'react';

const Category = () => {
  return <section className='bg-[#EEF0F7] flex flex-col justify-center items-center space-y-5'>
  <div className='text-[#222222] text-3xl font-bold mb-10 mt-10'>Browse Business by Category</div>
  <div className='flex flex-col space-y-10 pb-16 text-[#222222] font-bold'>
    <div className='flex flex-row space-x-10 h-36'>
        <div onClick={()=> window.location.href="/all-business/bakery/empty"} className='flex flex-col bg-white justify-center cursor-pointer items-center space-y-4 w-56 rounded-md shadow-md pt-3'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image.jpg" alt=""/>
        <span>Restaurants</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/clothing/empty"} className='flex flex-col w-56 rounded-md shadow-md pt-3 bg-white justify-center items-center space-y-4 cursor-pointer'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image2.jpg" alt=""/>
        <span>Clothing</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/skincare/empty"} className='flex flex-col w-56 pt-3 bg-white justify-center items-center space-y-4 cursor-pointer rounded-md shadow-md'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image3.jpg" alt=""/>
        <span>Skincare</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/footwear/empty"} className='flex flex-col w-56 pt-3 bg-white justify-center items-center space-y-4 cursor-pointer rounded-md shadow-md'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image4.jpg" alt=""/>
        <span>Footwear</span>
        </div>
    </div>
    <div className='flex flex-row space-x-10 h-36'>
    <div onClick={()=> window.location.href="/all-business/health/empty"} className='flex cursor-pointer flex-col w-56 pt-3 bg-white justify-center items-center space-y-4 rounded-md shadow-md'>
    <img className='w-16 h-16 rounded-full' src="images/Home-image5.jpg" alt=""/>
        <span >Health</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/accessories/empty"} className='cursor-pointer flex flex-col w-56 pt-3 bg-white justify-center items-center space-y-4 rounded-md shadow-md'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image6.jpg" alt=""/>
        <span >Accessories</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/gifts/empty"} className='cursor-pointer flex flex-col w-56 rounded-md shadow-md pt-3 bg-white justify-center items-center space-y-4'>
        <img className='w-16 h-16 rounded-full' src="images/Home-image7.jpg" alt=""/>
        <span>Gifts</span>
        </div>
        <div className='flex flex-col w-56 shadow-md rounded-md pt-3 bg-white justify-center items-center space-y-4'>
        <span>More Categories</span>
        </div>
    </div>
  </div>
  
</section>;
};

export default Category;
