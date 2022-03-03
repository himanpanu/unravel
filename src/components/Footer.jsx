import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-100 flex flex-row justify-center items-start space-x-32 py-10 text-slate-700'>
    <div className='flex flex-col space-y-1'>
      <h1 className='text-lg font-bold mb-4'>About</h1>
      <span>About Unravel</span>
      <span>Careers</span>
      <span>Press</span>
      <span>Investor Relations</span>
      <span>Trust & Safety</span>
      <span>Content Guidelines</span>
      <span>Accessibility Statement</span>
      <span>Terms of Service</span>
      <span>Privacy Policy</span>
      <span>Ad Choices</span>
    </div>
    <div className='flex flex-col space-y-1'>
      <h1 className='text-lg font-bold mb-4'>Discover</h1>
      <span>Unravel Project COst Guides</span>
      <span>Collections</span>
      <span>Talk</span>
      <span>Events</span>
      <span>The Local Unravel</span>
      <span>Unravel Blog</span>
      <span>Support</span>
      <span>Unravel Mobile</span>
      <span>Developers</span>
      <span>RSS</span>
    </div>
    <div className='flex flex-col space-y-1'>
      <h1 className='text-lg font-bold mb-4'>Unravel for Business</h1>
      <span>Claim your Business Page</span>
      <span>Advertise on Unravel</span>
      <span>Unravel for Restaurant Owners</span>
      <span>Table Management</span>
      <span>Business Success Stories</span>
      <span>Business Support</span>
      <span>Unravel Blog for Business</span>
    </div>
    <div className='flex flex-col space-y-1'> 
      <h1 className='text-lg font-bold mb-4'>Languages</h1>
      <span>English</span>
      <h1 className='text-lg font-bold mb-4'>Countries</h1>
      <span>India</span>
    </div>
  </div>
  )
}

export default Footer