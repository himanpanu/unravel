import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AddBusiness = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-row w-full px-32 justify-center space-x-10 mb-20'>
            <div className='w-1/2 flex flex-col text-sm'>
                <h1 className='text-2xl font-bold mb-3'>Add Your Business</h1>
                <p className='text-sm mb-3'>Add information about business below. Your business page will not appear in search results until the information has been verified and approved by our moderators. Once it is approved, you'll receive an email with instructions on how to claim your business page</p>
                <label for="bName" className='font-bold'>Business Name</label>
                <input id="bName" className='mb-3' placeholder='Business Name'/>
                <label for="address1" className='font-bold'>Address 1</label>
                <input id="address1" className='mb-3' placeholder='Enter Address 1'/>
                <label for="address2" className='font-bold' >Address2</label>
                <input id="address2" className='mb-3' placeholder='Enter Address 2'/>
                <div className='flex flex-row'>
                <div className='flex flex-col'>
                <label for="city" className='font-bold'>City</label>
                <input id="city" placeholder='City'/>
                </div>
                <div className='flex flex-col mb-3'>
                <label for="state" className='font-bold'>State</label>
                <input id="state" placeholder='State'/>
                </div>
                <div className='flex flex-col'>
                <label for="zip" className='font-bold'>Zip</label>
                <input id="zip" placeholder='Zip'/>
                </div>
                </div>
                <label for="phone" className='font-bold'>Phone</label>
                <input placeholder='Phone' className='mb-3' id="phone"/>
                <label for="website" className='font-bold'>Website</label>
                <input placeholder="Website" className='mb-3' id="website"/>
                <label for="Hours" className='font-bold'>Hours</label>
                <input id="hours" className='mb-3' placeholder='hours'/>
                <label for="categories" className='font-bold'>Categories</label>
                <input id="categories" className='mb-3' placeholder='Categories'/>
                <label for="email" className='font-bold'>Email ID</label>
                <input id='email' type='email' className='mb-6'placeholder='Email ID'/>
                <button className='self-start mb-3 bg-red-500 text-white px-5 py-2 rounded-md'>Submit</button>

            </div>
            <div className='w-1/2 p-10'>
                <img src="images/store.jpg" className='contain w-full'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AddBusiness