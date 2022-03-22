import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState();
    let navigate = useNavigate();
    const [password, setPassword] = useState();
    const handleChange = (event) => {
        if(event.target.name == "email"){
            setEmail(event.target.value)
        }else if(event.target.name == "password"){
            setPassword(event.target.value)
        }
    }

    // const onSubmit = async() => {
    //     await axios.post('https://finalexam.online/user/'+email+'/signin',{
    //         password: password
    //     })
    //     .then(async(data) => {
    //         await setlogin(data.data.isSuccess)
    //         login && navigate("/user")
    //     })
    // }

    // useEffect(() => {
    //     login && navigate("/interact");
    // },[login])

  return <div className='flex justify-center bg-slate-200 h-screen font-["Arial"]'>
      <div className='flex flex-col bg-white h-full justify-center items-center px-10  mb-10'> 
      <div className='w-full flex justify-center items-baseline space-x-2 text-slate-900 text-2xl font-medium mb-6 border-b border-b-slate-200 pb-4'>
        <span className='underline font-semibold'>UNRAVEL</span>
        <span className='text-sm'>  for Businesses</span>
      </div>
      <div className='w-full'>
        <div className='bg-red-600 text-sm py-2 w-full text-white text-center rounded-md'>
          Login with Google
        </div>
        <div className='bg-blue-900 text-sm py-2 w-full text-white text-center mt-2 mb-4 rounded-md'>
          Login with Facebook
        </div>
      </div>
      <div className='relative text-slate-400 text-sm mb-6 mt-2 border-b border-b-slate-200 w-full'>
        <p className='absolute left-36 -top-2 pb-2 px-2 bg-white text-center'>OR</p>
      </div>
          <input id="email" type="email" name="email" value={email} onChange={handleChange} placeholder='example@company.com' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md'/>
          <input id='password' type='password' name="password" value={password} onChange={handleChange} placeholder='Password' className='mb-5 w-80 px-3 py-2 text-sm border  border-slate-200 rounded-md'/>
          <p className='self-end text-sm text-[#999] font-bold'>Forgot Password ?</p>
          <button type="submit" onClick={() => login(email, password)} className='mb-5 mt-6 bg-blue-500 text-white w-80 rounded-3xl py-3'>Sign in</button>
        
          <p className='text-sm text-[#999] font-bold'>New to unravel?<Link to="/register" className='font-medium text-blue-500'> Create Account</Link></p>
      </div>
      <div className='w-4/5 bg-cover' style={{backgroundImage : "url('images/login-image2.jpg')"}}>

</div>
  </div>;
};

export default Login;
