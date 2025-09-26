import React from 'react'
import { HiCreditCard, HiHandThumbUp, HiPhone, HiRocketLaunch } from 'react-icons/hi2'

const Service = () => {
  return (
    <div className='container flex gap-9 w-full'>
      <div className="border-6 border-[#f2f2f2] w-full">
        <div className='flex justify-center items-center w-[64px] h-[64px] bg-primary text-white text-[24px] rounded-full'><HiHandThumbUp /></div>
        <div className="">
          <h2>100% Satisfaction Guaranteed  </h2>
          <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
      </div>
      <div className="flex flex-col gap-9 w-full">
        <div className="border-6 border-[#f2f2f2]"><div className='flex justify-center items-center w-[64px] h-[64px] bg-primary text-white text-[24px] rounded-full'><HiPhone/></div>        <div className="">
          <h2>24/7 Online Service  </h2>
          <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
</div>
        <div className="border-6 border-[#f2f2f2]"><div className='flex justify-center items-center w-[64px] h-[64px] bg-primary text-white text-[24px] rounded-full'><HiRocketLaunch /></div>        <div className="">
          <h2>Fast Delivery  </h2>
          <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
</div>
      </div>
      <div className="border-6 border-[#f2f2f2] w-full"><div className='flex justify-center items-center w-[64px] h-[64px] bg-primary text-white text-[24px] rounded-full'><HiCreditCard /></div>        <div className="">
          <h2>Payment With Secure System  </h2>
          <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
</div>
    </div>
  )
}

export default Service