import React, { useEffect, useState } from 'react'
import Blogs from '../components/Blogs';
import Businessbanner from '../components/Businessbanner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Listing from '../components/Listing';

const Index = () => {
    const [name, setName] = useState("");
    const [det, setDet] = useState();
    const [hidden, setHidden] = useState(true)
  
    const bChange = async(event) => {
      setName(event.target.value)
      await fetch("https://finalexam.online/onlinebusiness/autocomplete?inputString="+event.target.value)
      .then(response => response.json())
      .then(data => {
        setDet(data.data)
      })
  
    }
  
    useEffect(() => {
      bChange()
    },[name])
  
    const auto = () => {
      hidden ?  document.getElementById("nlist").classList.remove("hidden") : document.getElementById("nlist").classList.add("hidden");
      setHidden(!hidden);
    }
  
    return (
      <div className="h-screen">
      <Header/>
      {/* Cover Banner Start */}
      <section onClick={auto} style={{backgroundImage: "url(/images/store.jpg)"}} className={'bg-cover bg-center h-4/6'}>
        <div className='bg-blue-700 flex flex-col h-full items-center justify-center bg-opacity-80 space-y-16'>
          <div className='text-white flex flex-col items-center space-y-3'>
            <h2 className='text-4xl font-medium'>Welcome to The Biggest Business Directory</h2>
            <h4 className='text-xl'>It is a long established fact that reader are distracted</h4>
          </div>
          <div className='relative flex justify-between bg-white w-4/6 p-3 rounded-lg' style={{'z-index': 1}}>
            <input
              className='border-2 border-blue-900 rounded-sm px-2 w-3/6'
              placeholder='Search paintings,books,'
              value={name}
              onChange={bChange}
              onFocus={auto}
              onClick={() => {bChange() ; auto();}}
            />
            <div id="nlist" className="absolute left-0 top-16 bg-white px-10 rounded py-1 hidden" style={{"z-index": 300}}>
              {det && det.map(item => {
                return(<h1 onClick={()=> (setName(item))}>{item}</h1>)
              })}
            </div>
            <input
              className='border-2 border-blue-900 rounded-sm px-2'
              placeholder='Select Location'
            />
            <span className='text-white bg-[#FF952B] py-2 px-6'>
              <a href={`all-business/${name}`}>Search Here</a>
            </span>
          </div>
        </div>
    </section>
      <Businessbanner/>
      <Listing/>
      <Category/>
      <Blogs/>
      <Footer/>
      </div>)
}

export default Index