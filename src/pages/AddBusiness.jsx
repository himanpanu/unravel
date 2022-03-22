import axios from 'axios';
import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { AuthContext } from '../AuthProvider';
import Footer from '../components/Footer'
import Header from '../components/Header'

const AddBusiness = () => {
  const { setUser, user } = useContext(AuthContext);
  let navigate = useNavigate()
  const [data, setData] = useState({ name: "", email: "", phone: "", city: "", state: "", address1: "", categories: [], website: ""});

  const handleChange = (event) => {
    setData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }) )
  }

  const handleCategories = (event) => {
    const array = event.map(item => {
      return item.value
    })
    setData(prevState => ({
      ...prevState,
      categories: array
    }) )
    console.log(data)
  }

  const onSubmit = async() => {
    const body = {
      "categories": data.categories,
      "description": "some description",
      "followerCount": 0,
      "instangram": "",
      "address": data.address1,
      "name": data.name,
      "phoneNumber": data.phone,
      "serviceLocation": [
          data.city,
          data.state,
          data.zip
      ],
      "website": data.website,
      "createdBy": "naman"
  }
    await axios.post("https://finalexam.online/onlinebusiness", body)
    .then(response => {
      console.log(response);
      // const userResponse = {
      //   email: response.data.data.emailId,
      //   firstName: response.data.data.firstName,
      //   lastName: response.data.data.lastName,
      //   gender:response.data.data.gender,
      // }
      setUser(prevState => ({
        ...prevState,
        businessId: response.data.data.id
      }) )
      response.data.isSuccess && navigate("/user/business")
    })
  }

  const options = [
    { value: 'Bakery', label: 'Bakery' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Skin Care', label: 'Skin Care' },
    { value: 'Footwear', label: 'Footwear' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Gifts & More', label: 'Gifts & More' }
  ]

  return (
    <div className='font-["Arial"]'>
        <Header/>
        <div className='flex flex-row w-full px-32 justify-center space-x-10 mb-20 mt-10'>
            <div className='w-1/2 flex flex-col text-sm'>
                <h1 className='text-3xl font-semibold mb-3'>Add Your Business</h1>
                <p className='text-sm mb-3'>Add information about business below. Your business page will not appear in search results until the information has been verified and approved by our moderators. Once it is approved, you'll receive an email with instructions on how to claim your business page</p>
                <label for="name" className='font-bold'>Business Name</label>
                <input id="bName" name="name" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' placeholder='Business Name'/>
                <label for="address1" className='font-bold'>Address 1</label>
                <input id="address1" name="address1" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' placeholder='Enter Address 1'/>
                <label for="address2" className='font-bold' >Address2</label>
                <input id="address2" name="address2" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' placeholder='Enter Address 2'/>
                <div className='flex flex-row space-x-3'>
                <div className='flex flex-col'>
                <label for="city" className='font-bold'>City</label>
                <input id="city" name='city' onChange={handleChange} placeholder='City' className='border-2 rounded-md p-1'/>
                </div>
                <div className='flex flex-col mb-3'>
                <label for="state" className='font-bold'>State</label>
                <input id="state" name='state' onChange={handleChange} placeholder='State' className='border-2 rounded-md p-1'/>
                </div>
                <div className='flex flex-col'>
                <label for="zip" className='font-bold'>Zip</label>
                <input id="zip" name="zip" onChange={handleChange} placeholder='Zip' className='border-2 rounded-md p-1'/>
                </div>
                </div>
                <label for="phone" className='font-bold'>Phone</label>
                <input placeholder='phone' name="phone" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' id="phone"/>
                <label for="website" className='font-bold'>Website</label>
                <input placeholder="Website" name="website" className='mb-3 border-2 rounded-md p-1' onChange={handleChange} id="website"/>
                <label for="Hours" className='font-bold'>Service Area</label>
                <div className='flex space-x-4'>
                <input id="scity" name="scity" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' placeholder='service city'/>
                <input id="sstate" name="sstate" onChange={handleChange} className='mb-3 border-2 rounded-md p-1' placeholder='service state'/>
                </div>
                <label for="Categories" className='font-bold'>Categories</label>
                <Select
    isMulti
    id="categories"
    name="categories"
    onChange={handleCategories}
    options={options}
    className="basic-multi-select mb-2"
    classNamePrefix="select"
  />
                <label for="email" className='font-bold'>Email ID</label>
                <input id='email' value={user.email} name="email" onChange={handleChange} type='email' className='mb-6 border-2 rounded-md p-1'placeholder='Email ID'/>
                <button className='self-start mb-3 bg-red-500 text-white px-5 py-2 rounded-md' onClick={onSubmit}>Submit</button>

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