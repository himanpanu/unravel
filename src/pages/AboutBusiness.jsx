import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';

const AboutBusiness = () => {
    const { id } =  useParams();
    const [details, setDetails] = useState()
    const [reviews, setReviews] = useState()

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

  return (
    <div className='h-screen'>
        <Header/>
        <div style={{backgroundImage: details ? "url("+details.headerUrl[0]+")" : "url(/images/store.jpg)"}} className={'bg-cover flex bg-center h-4/6 items-end justify-end'}>
        
  </div>
  <div className='px-20 py-7 flex flex-col space-y-5'>
      <div className='flex space-x-3 text-sm text-slate-700'>
          <p>{details ? (details.serviceLocation[0]).toUpperCase() : 'FRANCE'}</p>
          <p>EAT & DRINK</p>
      </div>
      <h1 className='text-2xl'>{details ? details.name :"Mattone Restaurant and Bar"}</h1>
      <div className='flex space-x-5 pb-10'>
          <p>{details ? details.ratingAverage + " (" + details.reviewCount+ " reviews)" : '4.2 (3 reviews)'}</p>
          <p>$$</p>
          <p>{details ? details.categories.join(", ") : "Restaurant, Bar"}</p>
      </div>
      <div className='flex space-x-16 items-center'>
        <div className='flex flex-col items-center space-y-2 text-[0.9rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0 0 12 5C8.191 5 4.694 6.33 1.946 8.553L.69 6.997zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.257 1.556A10.954 10.954 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442l-1.257-1.556zm3.142 3.89A7.967 7.967 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556zm3.142 3.89A2.987 2.987 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334z" fill="rgba(149,164,166,1)"/></svg>
            <h4>Wifi</h4>
        </div>
        <div className='flex flex-col items-center space-y-2 text-[0.9rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z" fill="rgba(149,164,166,1)"/></svg>
            <h4>Reservations</h4>
        </div>
        <div className='flex flex-col items-center space-y-2 text-[0.9rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-6 6h4v2h-4v-2z" fill="rgba(149,164,166,1)"/></svg>
            <h4>Credit Cards</h4>
        </div>
        <div className='flex flex-col items-center space-y-2 text-[0.9rem]'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADL0lEQVRYhe2VQWhcVRSGv/MmjUQFmQFFCxJqbE0XLqp1oXajdaGBCiOOIiabhHdfEkhpVhXdBEQoSEEIpLz7mJTiRjsKSqXNqgopBRE3VlACJaI0QZFeW4sxJu8eNxkY2snMe52kbvxXj3fPf893z72cA/9rayRRFL0xMTFxV15j11ZkD8NwUFWT1dXVr4DlKIp2e+9PisifwNdAbK1dbuYNOk0+NTUViMh7qvp+PUl3d/evIvKFqv4EjADfj46O7mvmb1oBY0yfc+6XWq32TzuApaWlp4CH0zQ9Uf83PT19HTi2sddhoOq9PwnsA7TRv1kFTpdKpXPGmLvbAahqL/DH7OzsUrN1a+1amqZHgH5jzC1V2AzgTVXdKyJn2kGo6s/AfcPDwzs3i6lWq1eB74AzxpizURS93hLAWvsj8HwWiCAIvgUWurq6Ph4ZGeltATqoqlPAsqp+GIbhuwDS6nTGmH7gvIj8oKqHrLV/NYsbGxt7LE3Tz4BeYF5E5r3336RpeqnZ1URR9Iqq1rz3O1sC5IEwxuwQkVe994dE5AngUaAAXAJOOOdsrVZLASqVSqFYLP6tquW2AHkgGjU5OdmzsrLyuKpWVHVURD6P43gQYGho6J6enp4b3vuDmQBuF6LBewCYV9VnkyS5GIbhyyLyCXB/5kaU52E28V4ALojIAQAR6QfmrLXXcnXCTiDW19cHnHMfADjnjjvnygAShuExEXkk4z6Lzrm3i8XibuA88BuwkOcQN+lyICJHReTBjIZdpVKpXK8E8ABQAVpV4hngyY3vvcALABs53xJjjIrIS3Ecz+XFD8Nwj4h8KSKXC4XCwMzMzI2bY4wxnwK/W2sjY8w7IlKO43h/FEUvquq5jqZhkiQLqvqcqvalaXp2fHz83rx7dDyOO4WoX8Fp7/3i7QCIyFXn3PGGh7moqvMN62VgRVXnRORpYI+qngqCYJeqviZhGJ4SkU0nWUaIj+I4rtabFfAQcBFo16yuZO6EWZXlYTZqywHyQmwLQB6IbQPICrGtAFkgth2gHcQdAWgF0XEnzKokSRaAg6rat7a2NnCn8t4iY8yO/yx5M/0L/n2uq3YXNvMAAAAASUVORK5CYII="/>
            <h4>Non Smoking</h4>
        </div>
        <div className='flex flex-col items-center space-y-2 text-[0.9rem]'>
            <h4>+(4)</h4>
        </div>
      </div>
      <div>
          <h1 className='font-bold text-lg mb-4'>Overview</h1>
          <p className='text-[0.9rem]'>{details ? details.description :"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}</p>
      </div>

      <div className='text-[0.9rem] flex flex-col space-y-3'>
          <h1 className='text-lg font-bold'>
              Contact Info
          </h1>
          <h4>{details ? details.contact :"00 343 7859"}</h4>
          <h4>{details ? details.website : "www.abcsite.com"}</h4>
          <h4>facebooko.com/getgolo</h4>
          <h4>{details ? details.instagramUrl :"instagram.com/getgolo"}</h4>
      </div>

      <div>
          <h1 className='text-lg font-bold'>Opening Hours</h1>
          <div className='flex space-x-48 text-[0.9rem] mt-4'>
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
      <div>
          <h1 className='text-lg font-bold'>FAQ's</h1>
      </div>
      <div>
          <h1 className='text-lg font-bold'>Review{details ? "("+details.reviewCount+") "+details.ratingAverage :"(3) 4.2"}</h1>
          {reviews && reviews.map( item => <Rcomp det={item}/>)}
      </div>
      <div className='flex flex-col'>
          <h1 className='text-lg font-bold'>Write a Review</h1>
          <h4 className='text-[0.95rem] mt-3'>Rate This Place</h4>
          <textarea className='w-2/3 h-40 border border-slate-500 rounded-md mt-5'></textarea>
          <button className='rounded-xl mt-5 py-1 bg-blue-400 w-20 text-white'>Submit</button>
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