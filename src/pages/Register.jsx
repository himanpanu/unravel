import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import GoogleLogin from 'react-google-login';

const Register = () => {
  let navigate = useNavigate()
  const { setUser, user } = useContext(AuthContext);
  const [data, setData] = useState({ firstName: "", lastName: "", emailId: "", password: "", type: "Personal"});

  const handleChange = (event) => {
    setData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }) )
  }

  const responseGoogle = (response) => {
    setData(prevState => ({
      ...prevState,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      emailId: response.profileObj.email
    }) )
  }

  const onSubmit = async() => {
    await axios.post("https://finalexam.online/user", data)
    .then(response => {
      const userResponse = {
        email: response.data.data.emailId,
        firstName: response.data.data.firstName,
        lastName: response.data.data.lastName,
        gender:response.data.data.gender,
      }
      console.log(response)
      setUser(userResponse)
      userResponse.email != "" && (data.type == "Personal" ? navigate("/user") : navigate('/add-business'))
    })
  }

  return <div className='flex font-["Arial"] justify-center bg-slate-200 h-screen'>
  <div className='flex flex-col bg-white h-full justify-center items-center px-10  mb-10'> 
      <div className='w-full flex justify-center items-baseline space-x-2 text-slate-900 text-2xl font-medium mb-6 border-b border-b-slate-200 pb-4'>
        <span className='underline font-semibold'>UNRAVEL</span>
        <span className='text-sm'>  for Businesses</span>
      </div>
      <div className='w-full'>
        <GoogleLogin className='bg-red-600 text-sm py-2 w-full text-white text-center rounded-md'
         clientId='49615596781-se6vaulh8o62ul48ok2nmof99pf32f6b.apps.googleusercontent.com'
          buttonText='Register with Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <div className='bg-blue-900 text-sm py-2 w-full text-white text-center mt-2 mb-4 rounded-md'>
          Register with Facebook
        </div>
      </div>
      <div className='relative text-slate-400 text-sm mb-6 mt-2 border-b border-b-slate-200 w-full'>
        <p className='absolute left-36 -top-2 pb-2 px-2 bg-white text-center'>OR</p>
      </div>
      <input id="fName" onChange={handleChange} name="firstName" type="text" value={data.firstName} placeholder='First Name' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md' required/>
      <input id="lName" value={data.lastName} onChange={handleChange} name="lastName" type="text" placeholder='Last Name' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md' required/>
      <input id="email" value={data.emailId} onChange={handleChange} name="emailId" type="email" placeholder='example@company.com' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md' required/>
      <input id='password' onChange={handleChange} name="password" type='password' placeholder='Password' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md' required/>
      <input id='passwordc' name="passwordc" type='password' placeholder='Confirm Password' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md' required/>
      <select name="type" className='self-start mb-3 bg-white text-sm py-1 px-2' onChange={handleChange}>
        <option selected value="Personal">Personal User</option>
        <option value="Business">Business User</option>
      </select>
      <button className='mb-5 mt-2 bg-blue-500 text-white w-80 rounded-3xl py-3' onClick={onSubmit}>Register Now!</button>
     
      <p className='text-sm'>Already have an account?<Link to="/login" className='font-medium text-blue-500'> Sign In</Link></p>
  </div>
  <div className='w-4/5 bg-cover' style={{backgroundImage : "url('images/signup-image2.jpg')"}}>

  </div>
</div>;
};


export default Register;
