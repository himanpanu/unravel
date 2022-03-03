import React from 'react';

const Article2 = (props) => {
  return <div className='rounded-xl'>
  <img className="h-3/5 contain rounded-t-md border-slate-200 border" src={props.image} />
  <footer className='flex flex-col justify-around bg-white py-2 text-sm text-blue-900 rounded-b-md space-y-2 border-t-white border'>
      <div className='text-lg font-medium px-2'>{props.name}</div>
      <div className='text-xs font-medium pb-1 px-2'>{props.address}</div>
      <div className='flex font-medium justify-between text-xs pt-2 border-t-slate-200 border-white border'>
          <div className='bg-purple-700 rounded-sm text-white p-0.5 ml-2'>
              {props.rating}
          </div>
          <div className='mr-2'>
              {props.reviews} reviews
          </div>
      </div>
  </footer>
</div>;
}

export default Article2;
