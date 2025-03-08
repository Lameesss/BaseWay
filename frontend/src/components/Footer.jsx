import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                {/* <img src={assets.logo} className='mb-5 w-32' alt="" /> */}
                
                <h1 className='text-3xl mb-5 w-32 '>BASEWAY</h1>
                     
                        
                <p className='w-full md:w-2/3 text-gray-600'>
                 ShopNow.Explore our collections, subscribe for exclusive updates, and follow us on social media for the latest trends, promotions, and special offers. Contact us anytime!
                </p>
            </div>

             <div>
                   <p className='text-xl font-medium mb-5'>COMPANY</p>
                   <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                   </ul>

             </div>

             <div>
                <p className='text-xl font-medium mb-5'>
                        GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+11 243-798-5640</li>
                    <li>contact@foreeveyou.com</li>
                </ul>
             </div>


        </div>

         <div>
            <hr/>
            <p className='py-5 text-sm text-center '>Copyright 2024@ foreever.com - All Right Reserved.</p>
         </div>
      
    </div>
  )
}

export default Footer
