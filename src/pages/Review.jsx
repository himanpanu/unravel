import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Review = () => {
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
    },[name, hidden])
  
    const auto = () => {
      hidden ?  document.getElementById("nlist").classList.remove("hidden") : document.getElementById("nlist").classList.add("hidden");
      setHidden(!hidden);
    }

  return (
    <div className='h-screen font-["Arial"]'>
        <Header/>
        <section  className=' bg-slate-200 h-4/6 '>
      <div className='flex flex-col h-full items-center justify-center space-y-16'>
        <div className='text-black flex flex-row items-center space-y-3 px-40'>
            <div>
            <h2 className='text-4xl font-bold mb-8'>Your first review Awaits</h2>
          <h4 className='text-xl'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy</h4>
            </div>
            <div>
                <p className='h-40 w-96 bg-white rounded-lg p-10' contenteditable="true">Here</p>
            </div>
          
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
  <Footer/>
    </div>
  )
}

export default Review