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
      <div className='flex flex-col mt-24 bg-white h-2/3 justify-center items-center px-10 rounded-md'> 
          <p className='text-slate-900 text-2xl font-medium mb-6'>Sign in to our platform</p>
          <label for="email" className='text-sm self-start text-slate-700'>Your Email</label>
          <input id="email" type="email" name="email" value={email} onChange={handleChange} placeholder='example@company.com' className='mb-5 w-80 px-2 py-1 text-sm border  border-slate-400 rounded-sm'/>
          <label for="password" className='text-sm self-start text-slate-700'>Your Password</label>
          <input id='password' type='password' name="password" value={password} onChange={handleChange} placeholder='Password' className='mb-5 w-80 py-1 px-2 text-sm border  border-slate-400 rounded-sm'/>
          <p className='self-end text-sm'>Lost Password ?</p>
          <button type="submit" onClick={() => login(email, password)} className='my-5 bg-slate-700 text-white w-80 rounded-md py-1'>Sign in</button>
          <p className='text-sm'>or login with</p>
          <div className='flex flex-row space-x-5 my-5'>
              <p>F</p>
              <p>G</p>
          </div>
          <p className='text-sm'>Not registered?<Link to="/register" className='font-medium'>Create Account</Link></p>
      </div>
  </div>;
};

export default Login;
