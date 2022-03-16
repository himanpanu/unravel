import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Register = () => {
  let navigate = useNavigate()
  const { setUser, user } = useContext(AuthContext);
  const [data, setData] = useState({ firstName: "", lastName: "", emailId: "", password: ""});

  const handleChange = (event) => {
    setData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
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
      setUser(userResponse)
      userResponse.email != "" && navigate("/user")
    })
  }

  return <div className='flex font-["Arial"] justify-center bg-slate-200 h-full'>
  <div className='flex flex-col mt-14 bg-white h-screen justify-center items-center px-10 rounded-md mb-10'> 
      <p className='text-slate-900 text-2xl font-medium mb-6'>Create an account</p>
      <label for="fName" className='text-sm self-start text-slate-700'>First Name</label>
      <input id="fName" onChange={handleChange} name="firstName" type="text" placeholder='First Name' className='mb-5 w-80 px-2 py-1 text-sm border  border-slate-400 rounded-sm' required/>
      <label for="lName" className='text-sm self-start text-slate-700'>Last Name</label>
      <input id="lName" onChange={handleChange} name="lastName" type="text" placeholder='Last Name' className='mb-5 w-80 px-2 py-1 text-sm border  border-slate-400 rounded-sm' required/>
      <label for="email" className='text-sm self-start text-slate-700'>Your Email</label>
      <input id="email" onChange={handleChange} name="emailId" type="email" placeholder='example@company.com' className='mb-5 w-80 px-2 py-1 text-sm border  border-slate-400 rounded-sm' required/>
      <label for="password" className='text-sm self-start text-slate-700'>Your Password</label>
      <input id='password' onChange={handleChange} name="password" type='password' placeholder='Password' className='mb-5 w-80 py-1 px-2 text-sm border  border-slate-400 rounded-sm' required/>
      <label for="passwordc" className='text-sm self-start text-slate-700'>Confirm Password</label>
      <input id='passwordc' name="passwordc" type='password' placeholder='Confirm Password' className='mb-5 w-80 py-1 px-2 text-sm border  border-slate-400 rounded-sm' required/>
      <button className='mb-5 mt-2 bg-slate-700 text-white w-80 rounded-md py-1' onClick={onSubmit}>Sign up</button>
      <p className='text-sm'>or</p>
      <div className='flex flex-row space-x-5 my-5'>
          <p>F</p>
          <p>G</p>
      </div>
      <p className='text-sm'>Already have an account?<Link to="/login" className='font-medium'>Login here</Link></p>
  </div>
</div>;
};

export default Register;
