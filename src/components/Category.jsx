import React from 'react';

const Category = () => {
  return <section className='bg-slate-200 flex flex-col justify-center items-center space-y-5'>
  <div className='text-blue-900 text-3xl font-bold mb-10 mt-10'>Browse Business by Category</div>
  <div className='flex flex-col space-y-10 pb-16'>
    <div className='flex flex-row space-x-10 h-28'>
        <div onClick={()=> window.location.href="/all-business/restaurant"} className='flex flex-col bg-white justify-center cursor-pointer items-center space-y-4 w-44 pt-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.268 12.146l-.854.854 7.071 7.071-1.414 1.414L12 14.415l-7.071 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.62-5.157 1.953-1.952 4.644-2.427 6.011-1.06s.892 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621zM4.222 3.808l6.717 6.717-2.828 2.829-3.89-3.89a4 4 0 0 1 0-5.656zM18.01 9.11c1.258-1.257 1.517-2.726 1.061-3.182-.456-.456-1.925-.197-3.182 1.06-1.257 1.258-1.516 2.727-1.06 3.183.455.455 1.924.196 3.181-1.061z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Restaurants</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/night"} className='flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Nightlife</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/auto"} className='flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736C7.88 15.754 6.318 15 4 15zm16 0c-2.317 0-3.879.755-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1v-2zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6H6z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Automotive</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/food"} className='flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Food Outlet</span>
        </div>
    </div>
    <div className='flex flex-row space-x-10 h-28'>
    <div onClick={()=> window.location.href="/all-business/hostel"} className='flex cursor-pointer flex-col w-44 pt-3 bg-white justify-center items-center space-y-4'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.424A.5.5 0 0 1 12 1.77V19z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>PG & Hostels</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/home"} className='cursor-pointer flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Home Services</span>
        </div>
        <div onClick={()=> window.location.href="/all-business/art"} className='cursor-pointer flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 8v8h8V8H8zM6 6h12v12H6V6zm0-4h2v3H6V2zm0 17h2v3H6v-3zM2 6h3v2H2V6zm0 10h3v2H2v-2zM19 6h3v2h-3V6zm0 10h3v2h-3v-2zM16 2h2v3h-2V2zm0 17h2v3h-2v-3z" fill="rgba(35,68,153,1)"/></svg>
        <span className='text-blue-900 text-sm font-medium'>Art Galleries</span>
        </div>
        <div className='flex flex-col w-44 pt-3 bg-white justify-center items-center space-y-4'>
        <span className='text-blue-900 text-sm font-medium'>More Categories</span>
        </div>
    </div>
  </div>
  
</section>;
};

export default Category;
