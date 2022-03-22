import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const AboutBusiness = () => {
    const { id } =  useParams();
    const [details, setDetails] = useState()
    const [reviews, setReviews] = useState()
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0);

    useEffect(async () => {
        await fetch('https://finalexam.online/onlinebusiness/'+id)
        .then(response => response.json())
        .then(data => {
            setDetails(data.data)
        })

        await fetch('https://finalexam.online/review/business/'+id)
        .then(response => response.json())
        .then(data => {
            setReviews(data.data)
        } )
    })

    const handleReview = async() => {
        setRating(0)
        setReview('')
        await fetch("https://finalexam.online/review/test2@gmail.com/"+id, {
            method: 'POST', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({"ratingStar": rating,
            "message": review,
            "businessName":"businessName"})
          })
          .then(response => response.json())
    }

  return (
    <div className='h-screen font-["Arial"]'>
        <Header/>
        <div style={{backgroundImage: details&&details.headerUrl ? "url("+details.headerUrl[0]+")" : "url(/images/store.jpg)"}} className={'bg-cover flex bg-center h-4/6 items-end justify-end'}>
        
  </div>
  <div className='pb-7 flex flex-col space-y-5'>
     
      <div className='px-20 flex flex-col space-y-5 py-10 bg-black text-white'>
        <h1 className='text-3xl font-semibold'>{details ? details.name :"Mattone Restaurant and Bar"}</h1>
        <div className='flex space-x-3'>
        <span className='flex space-x-1'><span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm py-1'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
</span>

<p>{details ? details.ratingAverage + " (" + details.reviewCount+ " reviews)" : '4.2 (3 reviews)'}</p>

        </div>
         
      </div>

      <div className='px-20 pt-8'>
          <h1 className='text-2xl font-bold mb-5'>Location & Hours</h1>
          <div className='flex justify-between'>
          <div className='flex items-start space-x-10'>
            <div className='border h-48 w-64'>
                <img className='contain h-48 w-64' src="/images/About-Business-image3.png"/>
            </div>
            <div className='flex space-x-24 text-[0.9rem]'>
                <div className='flex flex-col space-y-1'>
                    <h4>Monday</h4>
                    <h4>Tuesday</h4>
                    <h4>Wednesday</h4>
                    <h4>Thursday</h4>
                    <h4>Friday</h4>
                    <h4>Saturday</h4>
                    <h4>Sunday</h4>
                </div>
                <div className='flex flex-col space-y-1'>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>8:00 am - 10:00 pm</h4>
                    <h4>Close</h4>
                </div>
            </div>
          </div>
                <div className='flex flex-col border py-6 px-8'>
          <h4>{details ? details.contact :"00 343 7859"}</h4>
          <a className='text-blue-500' href={details ? details.website : "www.abcsite.com"}>{details ? details.website : "www.abcsite.com"}</a>
          <a href="https://facebook.com/getgolo">facebook.com/getgolo</a>
          <a href={details ? details.instagramUrl :"instagram.com/getgolo"}>{details ? details.instagramUrl :"instagram.com/getgolo"}</a>
                </div>
          </div>
          
          
         
      </div>
      <div className='px-20 pt-8'>
        <img className='h-48' src="/images/About-Business-image2.png"/>
      </div>
      <div className='px-20 pt-10'>
          <h1 className='text-2xl font-semibold pb-10'>Reviews</h1>
          {reviews && reviews.map( item => <BlogCard det={item}/>)}
      </div>
      <div className='flex flex-col px-20 pt-10'>
          <h1 className='text-2xl font-bold'>Write a Review</h1>
          <h4 className='text-[0.95rem] mt-3'>Rate This Place</h4>
          <div>
          {/* <select value={rating} onChange={evt => setRating(evt.target.value)} name="rating w-12" className='py-2 px-4 bg-white rounded-md'>
              <option value="5" selected>5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
          </select> */}
          </div>

          <ReactStars
    count={5}
    value={rating}
    onChange={(event) => setRating(event)}
    size={24}
    activeColor="#ffd700"
  />
          
          <textarea value={review} onChange={evt => setReview(evt.target.value)} className='w-2/3 h-40 border border-slate-500 rounded-md mt-5 p-5'></textarea>
          <button onClick={handleReview} className='rounded-xl mt-5 py-1 bg-blue-400 w-20 text-white'>Submit</button>
      </div>
      <div className='px-20 pt-16'>
          <div className='w-4/5 space-x-16 border-y border-y-slate-400 py-10 flex justify-evenly px-5'>
          <div>
                <h1 className='text-[#2d2e2f] text-xl'>Best of New Delhi</h1>
                <p className='text-[#909192] text-sm'>Things to do in New Delhi lorem ipsum text to fill</p>
            </div>
            <div>
                <h1 className='text-[#2d2e2f] text-xl'>Other Businesses Nearby</h1>
                <p className='text-[#909192] text-sm'>Things to do in New Delhi lorem ipsum text to fill</p>
            </div>
            <div>
                <h1 className='text-[#2d2e2f] text-xl'>Near me</h1>
                <p className='text-[#909192] text-sm'>Things to do in New Delhi lorem ipsum text to fill</p>
            </div>
          </div>
            
      </div>
      <div className='px-20 py-10'>
          <h1 className='text-2xl font-semibold pb-3'>FAQ's</h1>
          <div className='py-3'>
              <h1>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</h1>
              <h1 className='text-[#6E7072]'>Answer -  lorem ipsum text to fill, lorem ipsum </h1>
          </div>
          <div className='py-3'>
              <h1>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</h1>
              <h1 className='text-[#6E7072]'>Answer -  lorem ipsum text to fill, lorem ipsum </h1>
          </div>
          <div className='py-3'>
              <h1>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</h1>
              <h1 className='text-[#6E7072]'>Answer -  lorem ipsum text to fill, lorem ipsum </h1>
          </div>
          <div className='py-3'>
              <h1>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</h1>
              <h1 className='text-[#6E7072]'>Answer -  lorem ipsum text to fill, lorem ipsum </h1>
          </div>
      </div>
  </div>
        <Footer/>
    </div>
  )
}

export default AboutBusiness

const Rcomp = (props) => {
    var date = new Date(props.det.createdDate)
    return (
        <div className='text-[0.9rem] my-4'>
              <div>
                  <h4 className='font-bold'>{props.det.firstName +" " + props.det.lastName + " - (" + props.det.ratingStar+")"}</h4>
                  <h5 className='text-xs'>{date.toLocaleDateString()}</h5>
              </div>
              <p className='mt-2'>
              {props.det.message}
              </p>

              <button className='bg-slate-200 py-1 px-2 rounded-md mt-2'>Reply</button>
          </div>
    )
}

const BlogCard = (props) => {
    var date = new Date(props.det.createdDate)
    return <div className='rounded-md shadow-md px-8 py-6'>
      <div className='flex space-x-4'>
      <img className="h-16 w-16 contain rounded-full" src="/images/auto.jpg" />
      <div>
        <div className='flex space-x-4'><span className='flex space-x-1'><span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
        <span className='bg-[#4ba168] flex items-center px-1 rounded-sm py-1'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08203 12.31L3.30603 14.81L4.21803 9.50999L0.353027 5.76099L5.69303 4.98799L8.08203 0.166992L10.471 4.98699L15.811 5.75999L11.946 9.51299L12.858 14.813L8.08203 12.31Z" fill="white"/>
</svg>

        </span>
</span><span className='text-[#999] text-sm'>{props.det.ratingStar}/5.0</span></div>
        <h1 className='text-sm font-bold text-[#555555] mt-2'>Shops</h1>
      </div>
      </div>
      
      <footer className='flex flex-col justify-around bg-white py-2 text-sm rounded-b-md space-y-2 pb-6 mt-2'>
         <div className='flex space-x-2 items-center'>
            <h1 className='text-base font-bold'>{props.det.firstName +" " + props.det.lastName }</h1>
            <h2 className='text-sm text-[#999]'>reviewd</h2>
         </div>
         <div className='text-lg text-[#999] pb-4'>
         {props.det.message}
         </div>
         <div className='flex justify-between items-center'>
            <div className='text-xs font-semibold text-[#999]'>Published : {date.toLocaleDateString()}</div>
         </div>
      </footer>
    </div>;
}