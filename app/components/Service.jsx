import React from 'react'
import { HiCreditCard, HiHandThumbUp, HiPhone, HiRocketLaunch } from 'react-icons/hi2'

const Service = () => {
  return (

    <div className="container py-8 gap-8 gap-y-8 flex flex-col lg:flex-row">
      <div className="bg-[#f2f2f2] lg:w-1/4 p-6">
        <div className="flex flex-col  items-center gap-y-4 bg-background h-full p-6">
          {/* div1 content start */}

          {/* icon part */}
          <div className="flex justify-center items-center aspect-square h-16 w-16 bg-primary text-white text-[24px] rounded-full"><HiHandThumbUp />
          </div>

          {/* text part */}
          <div className="flex flex-col gap-y-2">
            <h3 className='font-prime font-normal text-[28px] text-center text-dark-gray leading-9'>100% Satisfaction Guaranteed  </h3>
            <p className='font-second font-normal text-[12px] text-dark-gray'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
          </div>

          {/* div1 content end */}
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 gap-y-8">
        <div className='bg-[#f2f2f2] h-full p-6'>
          <div className="flex flex-col lg:flex-row items-center gap-4 bg-background h-full p-6">
            {/* div2.1 content start */}
            {/* icon part */}
            <div className="flex justify-center items-center aspect-square h-16 w-16 bg-primary text-white text-[24px] rounded-full"><HiPhone />
            </div>

            {/* text part */}
            <div className="flex flex-col gap-y-2">
              <h3 className='font-prime font-normal text-[28px] text-dark-gray leading-9'>24/7 Online Service  </h3>
              <p className='font-second font-normal text-[12px] text-dark-gray'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            {/* div2.1 content end */}
          </div>
        </div>
        <div className='bg-[#f2f2f2] h-full p-6'>
          <div className="flex flex-col lg:flex-row items-center gap-4 bg-background h-full p-6">
            {/* div2.2 content start*/}

            {/* icon */}
            <div className="flex justify-center items-center aspect-square h-16 w-16 bg-primary text-white text-[24px] rounded-full"><HiRocketLaunch /></div>

            {/* text */}
            <div className="flex flex-col gap-y-2">
              <h3 className='font-prime font-normal text-[28px] text-dark-gray leading-9'>Fast Delivery  </h3>
              <p className='font-second font-normal text-[12px] text-dark-gray'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>

            {/* div2.2 content end*/}
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] lg:w-1/4 p-6">
        <div className="flex flex-col items-center gap-y-4 bg-background h-full p-6">
          {/* div3 payment content start */}

          {/* icon */}
          <div className="flex justify-center items-center aspect-square h-16 bg-primary text-white text-[24px] rounded-full"><HiCreditCard /></div>

          {/* text start */}
          {/* text */}
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-prime font-normal text-[28px] text-center text-dark-gray leading-9'>Payment With Secure System  </h3>
            <p className='font-second font-normal text-[12px] text-dark-gray'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
          </div>

          {/* div3 content end */}
        </div>
      </div>
    </div>)
}

export default Service