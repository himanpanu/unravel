import React from 'react';

const Article = (props) => {
  return <div className='rounded-xl px-2 h-48'>
      <img className="h-4/5 contain rounded-t-md" src={props.image}/>
      <footer className='flex justify-around bg-white py-2 text-sm text-slate-600 rounded-b-md'>
          <div>20+ Book Stores</div>
          <div>20 Cities</div>
      </footer>
  </div>;
};

export default Article;
