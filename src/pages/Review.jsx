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
        <section  className=' bg-[#3578F8] h-5/6'>
      <div className='flex flex-col h-full items-center justify-center space-y-16'>
        <div className='text-white flex flex-row items-start space-y-3 space-x-5 px-32'>
            <div>
            <h2 className='text-6xl font-bold mb-8'>Your first review Awaits</h2>
          <h4 className='text-xl'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy</h4>
            </div>
            <div>
              <img className='max-w-xs' src="images/Reviews-image.jpg"/>
            </div>
          
        </div>
        <div className='relative flex bg-white w-4/6 rounded-lg items-center' style={{'z-index': 1}}>
            <input
              className='rounded-sm px-3 w-3/6 py-3 rounded-l-md'
              placeholder='Search paintings,books,'
              value={name}
              onChange={bChange}
              onFocus={auto}
              onClick={() => {bChange() ; auto();}}
            />
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89697 14.818L0.739973 20.975C0.628805 21.0814 0.540017 21.2089 0.47882 21.3501C0.417624 21.4913 0.385254 21.6433 0.383611 21.7971C0.381968 21.951 0.411085 22.1036 0.469253 22.2461C0.527421 22.3885 0.613467 22.5179 0.722337 22.6267C0.831207 22.7354 0.960707 22.8213 1.10323 22.8793C1.24576 22.9373 1.39843 22.9662 1.55229 22.9644C1.70615 22.9625 1.8581 22.93 1.9992 22.8686C2.1403 22.8072 2.26772 22.7183 2.37397 22.607L8.53097 16.45C10.3717 17.8757 12.6863 18.5466 15.0041 18.3263C17.3219 18.1059 19.4687 17.0109 21.0078 15.2639C22.5469 13.5169 23.3626 11.2492 23.289 8.92214C23.2155 6.59507 22.2582 4.38341 20.6119 2.73709C18.9656 1.09078 16.7539 0.133477 14.4268 0.0599324C12.0998 -0.0136123 9.83206 0.802125 8.08508 2.3412C6.33809 3.88027 5.24305 6.02707 5.02271 8.34486C4.80237 10.6626 5.47328 12.9773 6.89897 14.818H6.89697ZM14.135 16.078C12.7769 16.0776 11.4494 15.6745 10.3204 14.9197C9.19141 14.1649 8.31156 13.0923 7.79212 11.8375C7.27268 10.5827 7.13697 9.20203 7.40216 7.87009C7.66736 6.53816 8.32153 5.31476 9.28198 4.35459C10.2424 3.39443 11.466 2.74061 12.798 2.47581C14.13 2.211 15.5107 2.34711 16.7653 2.86691C18.02 3.38672 19.0923 4.26688 19.8468 5.39611C20.6013 6.52534 21.004 7.85293 21.004 9.211C21.004 10.113 20.8263 11.0061 20.4811 11.8394C20.1358 12.6726 19.6298 13.4297 18.992 14.0674C18.3541 14.7051 17.5968 15.2109 16.7635 15.5559C15.9301 15.9008 15.0369 16.0783 14.135 16.078V16.078Z" fill="#999999"/>
</svg>

            <div id="nlist" className="absolute left-0 top-16 bg-white px-10 rounded py-1 hidden" style={{"z-index": 300}}>
              {det && det.map(item => {
                return(<h1 onClick={()=> (setName(item))}>{item}</h1>)
              })}
            </div>
            <input
              className='rounded-sm px-2 py-3 w-2/5'
              placeholder='Select Category'
            />
            <span className='text-white bg-[#051D4D] py-3 rounded-r-md px-6 text-center w-1/5'>
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