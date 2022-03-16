import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import { businesses } from '../imgs'

const AllBusiness = () => {
  const { name } =  useParams();
  const [bdata, setData] = useState(businesses);
  fetch("https://finalexam.online/onlinebusiness/search", {
        method: 'POST', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({"searchLocation":{"city":"","country":"india","state":""},"searchString": name})
      })
      .then(response => response.json())
      .then(data => {
        setData(data)
      })


  return (
    <div class="h-screen font-['Arial']">
        <Header/>
        <section className='bg-slate-100 py-16 flex flex-col justify-center items-center space-y-3 px-16'>
            <div className='text-blue-900 text-3xl font-medium'>Our Latest Listings</div>
            <div className='text-blue-900 text-xl'>It is a long established fact that reader are distracted</div>
            <div className='flex flex-wrap justify-center items-start w-full pb-5 pt-10'>{ bdata.data.map((value) => {
                return (<Article2 key={value.id} rating={value.ratingAverage} image={value.headerUrl[0]} reviews={value.reviewCount} {...value}/>)
            })}</div>
  
    </section>;
    </div>
  )
}

const Article2 = (props) => {
    return <a href={'/about-business/'+props.id}><div className='rounded-xl mb-8 w-56 mx-4'>
    <img className="w-56 contain rounded-t-md border-slate-200 border" src={props.image} />
    <footer className='flex flex-col justify-around bg-white py-2 text-sm text-blue-900 rounded-b-md space-y-2 border-t-white border'>
        <div className='text-lg font-medium px-2'>{props.name}</div>
        <div className='text-xs font-medium pb-1 px-2'>{props.address}</div>
        <div className='flex font-medium justify-between text-xs pt-2 border-t-slate-200 border-white border'>
            <div className='bg-purple-700 rounded-sm text-white p-0.5 px-2 ml-2'>
                {props.rating}
            </div>
            <div className='mr-2'>
                {props.reviews} reviews
            </div>
        </div>
    </footer>
  </div></a>;
  }

export default AllBusiness