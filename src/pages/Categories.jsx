import React from 'react'
import Select from 'react-select'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Categories = () => {
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
    <div className='font-["Arial"] flex flex-col justify-center'>
        <Header/>
        <div className='bg-[#1354D1] w-full h-1/2 -z-50 absolute top-0'></div>
        <div className='flex flex-row px-16 py-10 w-5/6 justify-center self-center bg-white mt-20 border border-slate-200 shadow-md'>
         <Sidebar/>
            <div className='px-10 w-5/6 pb-16'>
            <h2 className='mb-2 text-4xl text-[#263248] pr-20'>Category</h2>
                <div className='text-blue-500 py-2 text-sm px-6 border rounded border-slate-300 mt-4 w-max mb-10'> Add Another business category</div>

                <Select
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Categories