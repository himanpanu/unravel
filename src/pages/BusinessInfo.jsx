import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../AuthProvider';
import axios from 'axios';

const BusinessInfo = () => {
    const { setUser, user } = useContext(AuthContext);
    const [binfo, setBinfo] = useState({ name: ""});

    useEffect(async() => {
        await axios.get("https://finalexam.online/onlinebusiness/"+user.businessId)
    .then(response => {
      console.log(response.data.data);
      setBinfo(response.data.data)
    })
    })
  return (
    <div className='font-["Arial"] flex flex-col justify-center'>
    <Header/>
    <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
    <div className='flex flex-row px-16 py-10 w-5/6 justify-center self-center bg-white mt-20 border border-slate-200 shadow-md pb-40'>
     <Sidebar/>
        <div className='px-10 w-4/5'>
            <div className='flex justify-between items-center'>
            <h2 className='mb-2 text-3xl text-[#263248] pr-20'>Business Information</h2>
            </div>
       
            {/* <Rcomp/> */}
            <div className='pt-4 w-full shadow-md px-8 mt-4 pb-8'>
            <div className='flex justify-between pb-4 pt-4'>
                <div>
                <h1 className='text-[#808080]'>Name</h1>
                <h2 className='text-[#263248] text-xl'>{binfo.name != "" ? binfo.name : "ABC Business Store"}</h2>
                </div>
                <div>
                <svg width="24" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.813 17.615L16.748 15.68L14.212 13.144L12.277 15.079V16.013H13.877V17.613H14.811L14.813 17.615ZM22.152 5.59999C22.1185 5.5583 22.0758 5.52494 22.0273 5.50257C21.9787 5.48019 21.9257 5.4694 21.8722 5.47105C21.8188 5.4727 21.7665 5.48674 21.7194 5.51206C21.6723 5.53739 21.6318 5.57331 21.601 5.61699L15.763 11.46C15.7252 11.4944 15.6948 11.5362 15.6736 11.5827C15.6524 11.6292 15.6409 11.6795 15.6397 11.7306C15.6385 11.7817 15.6477 11.8325 15.6667 11.88C15.6857 11.9274 15.7142 11.9705 15.7503 12.0066C15.7865 12.0428 15.8295 12.0712 15.877 12.0902C15.9244 12.1092 15.9752 12.1184 16.0263 12.1173C16.0774 12.1161 16.1278 12.1045 16.1743 12.0834C16.2208 12.0622 16.2625 12.0318 16.297 11.994L22.135 6.15599C22.1788 6.1253 22.2149 6.0848 22.2404 6.03772C22.2658 5.99063 22.2799 5.93825 22.2816 5.88475C22.2832 5.83125 22.2724 5.7781 22.2499 5.72954C22.2274 5.68097 22.1938 5.63832 22.152 5.60499V5.59999ZM23.486 15.509V18.678C23.4823 19.9499 22.9754 21.1686 22.076 22.068C21.1766 22.9674 19.9579 23.4743 18.686 23.478H4.79997C4.16791 23.4874 3.54065 23.3671 2.9569 23.1246C2.37315 22.8821 1.8453 22.5225 1.40596 22.068C0.953599 21.6291 0.595574 21.1026 0.353814 20.5205C0.112053 19.9385 -0.00835403 19.3132 -3.50252e-05 18.683V4.79999C-0.00887469 4.16861 0.111667 3.54211 0.354164 2.95908C0.59666 2.37606 0.955974 1.84887 1.40996 1.40999C1.84906 0.956285 2.37629 0.59716 2.95926 0.354685C3.54224 0.11221 4.16863 -0.00849421 4.79997 -8.99733e-06H18.683C19.356 -0.00586585 20.0221 0.136503 20.634 0.416991C20.7121 0.450727 20.7806 0.503573 20.833 0.570672C20.8854 0.637771 20.9201 0.716971 20.934 0.800991C20.9523 0.887762 20.9482 0.977784 20.9219 1.0625C20.8957 1.14721 20.8482 1.2238 20.784 1.28499L19.967 2.10199C19.9017 2.17536 19.8159 2.22738 19.7206 2.25128C19.6254 2.27518 19.5251 2.26985 19.433 2.23599C19.188 2.17058 18.9356 2.13697 18.682 2.13599H4.79997C4.44888 2.13097 4.10048 2.19795 3.77628 2.33279C3.45207 2.46763 3.15894 2.66747 2.91496 2.91999C2.66397 3.16382 2.46541 3.45633 2.33146 3.7796C2.19751 4.10288 2.13098 4.4501 2.13596 4.79999V18.682C2.13094 19.0331 2.19792 19.3815 2.33276 19.7057C2.4676 20.0299 2.66745 20.323 2.91997 20.567C3.16394 20.8195 3.45707 21.0194 3.78128 21.1542C4.10548 21.289 4.45387 21.356 4.80497 21.351H18.683C19.3903 21.3491 20.0681 21.0674 20.5682 20.5672C21.0683 20.0671 21.3501 19.3893 21.352 18.682V16.582C21.3506 16.5138 21.3632 16.4461 21.389 16.383C21.4148 16.3199 21.4533 16.2627 21.502 16.215L22.57 15.147C22.6419 15.0674 22.7375 15.0131 22.8426 14.992C22.9478 14.971 23.0569 14.9843 23.154 15.03C23.2551 15.0627 23.3427 15.1278 23.4031 15.2153C23.4635 15.3028 23.4933 15.4078 23.488 15.514L23.486 15.509ZM21.885 3.19999L26.685 7.99999L15.475 19.21H10.675V14.41L21.885 3.19999ZM29.292 5.39999L27.757 6.93899L22.957 2.13899L24.487 0.599991C24.7886 0.300462 25.1964 0.132361 25.6215 0.132361C26.0465 0.132361 26.4544 0.300462 26.756 0.599991L29.292 3.13599C29.4431 3.28309 29.5626 3.4596 29.6429 3.65464C29.7232 3.84967 29.7627 4.0591 29.759 4.26999C29.762 4.48029 29.7221 4.68899 29.6416 4.88331C29.5611 5.07762 29.4418 5.25344 29.291 5.39999H29.292Z" fill="black"/>
</svg>
                </div>
                
            </div>
            <div className='flex flex-col space-y-1 justify-around pb-4 pt-4'>
                <h1 className='text-[#808080]'>Address Line 1</h1>
                <h2 className='text-[#263248] text-xl'>{binfo.address ? binfo.address : "52, 13 floor, ABC Avenue"}</h2>
            </div>
            <div className='flex flex-col space-y-1 justify-around pb-4 pt-4'>
                <h1 className='text-[#808080]'>Address Line 2</h1>
                <h2 className='text-[#263248] text-xl'>{binfo.address ? binfo.address : "7 street, 26 lane"}</h2>
            </div>
            <div className='flex flex-col space-y-1 justify-around pb-4 pt-4'>
                <h1 className='text-[#808080]'>City</h1>
                <h2 className='text-[#263248] text-xl'>{binfo.serviceLocation ? binfo.serviceLocation[0] : "New Delhi"}</h2>
            </div>
            <div className='flex space-x-40 items-center pb-4 pt-4'>
                <div>
                    <h1 className='text-[#808080]'>Pincode</h1>
                    <h2 className='text-[#263248] text-xl'>{binfo.serviceLocation ? binfo.serviceLocation[2] : "2xx2030"}</h2>
                </div>
                <div>
                    <h1 className='text-[#808080]'>Country</h1>
                    <h2 className='text-[#263248] text-xl'>India</h2>
                </div>
            </div>
            </div>
          
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default BusinessInfo