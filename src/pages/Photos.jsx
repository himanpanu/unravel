import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Photos = () => {
  return (
    <div className='font-["Arial"] flex flex-col justify-center'>
        <Header/>
        <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
        <div className='flex flex-row px-16 py-10 w-5/6 justify-center self-center bg-white mt-20'>
         <Sidebar/>
            <div className='px-10 pb-20'>
                <div className='flex justify-between items-start'>
                <h2 className='mb-8 text-4xl text-[#263248] pr-20'>Photos</h2>
                    <div className='flex text-sm space-x-8'>
                        <span className='bg-[#3578F8] text-white rounded-md py-2 px-4 cursor-pointer'>Edit Photos</span>
                        <span onClick={()=>window.location.href="/user/business/addphotos"} className='cursor-pointer bg-[#051D4D] text-white rounded-md py-2 px-4'>Add Photos</span>
                    </div>
                </div>
                
                <div className='flex flex-col pt-4'>
                    <div className='flex space-x-4'>
                        <img className='w-44 rounded-md' src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__480.jpg"/>
                        <img className='w-44 rounded-md' src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?k=20&m=491712724&s=612x612&w=0&h=Jm11Gd2r3G__G1ob1n3fMkmkgalzaJw79mT4DQD2yRc="/>
                        <img className='w-44 rounded-md' src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzYyNDB8fGVufDB8fHx8&w=1000&q=80"/>
                        <img className='w-44 rounded-md' src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzYyNDB8fGVufDB8fHx8&w=1000&q=80"/>
                    </div>
                    <div className='flex space-x-4 mt-8'>
                        <img className='w-44 rounded-md' src="https://economictimes.indiatimes.com/thumb/msid-59034408,width-1200,height-900,resizemode-4,imgsize-169252/cabinet-nod-for-four-laning-of-rs-2776-crore-road-project-in-himachal-pradesh.jpg?from=mdr"/>
                        <img className='w-44 rounded-md' src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__480.jpg"/>
                        <img className='w-44 rounded-md' src="https://economictimes.indiatimes.com/thumb/msid-59034408,width-1200,height-900,resizemode-4,imgsize-169252/cabinet-nod-for-four-laning-of-rs-2776-crore-road-project-in-himachal-pradesh.jpg?from=mdr"/>
                        <img className='w-44 rounded-md' src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__480.jpg"/>
                    </div>
                    <div className='flex space-x-4 mt-8'>
                        <img className='w-44 rounded-md' src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058__480.jpg"/>
                        <img className='w-44 rounded-md' src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?k=20&m=491712724&s=612x612&w=0&h=Jm11Gd2r3G__G1ob1n3fMkmkgalzaJw79mT4DQD2yRc="/>
                        <img className='w-44 rounded-md' src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzYyNDB8fGVufDB8fHx8&w=1000&q=80"/>
                        <img className='w-44 rounded-md' src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzYyNDB8fGVufDB8fHx8&w=1000&q=80"/>
                    </div>
                </div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Photos