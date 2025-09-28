import React from 'react'
import { HiStar } from 'react-icons/hi2'

const SingleProduct = () => {
  return (
    <div className='singleProduct flex justify-center items-center'>
      {/* single product */}
      <div className="flex flex-col gap-y-4 w-full"> {/* Set width to full to use grid space */}

        {/* single product image start - Now uses aspect ratio */}
        <div className="w-full aspect-[3/4] bg-[url('/heroBanner.png')] bg-cover bg-center px-2 py-3 relative">
          
          {/* rating inside the pic - Added absolute positioning */}
          <div className='absolute top-3 right-3 flex place-self-end w-fit items-center justify-between gap-1 bg-primary px-2 py-1 rounded-full font-second font-normal text-[14px] md:text-[16px]'>
            <HiStar className='text-[#FFE605]' />
            <p className='text-white'>4.4</p>
          </div>
        </div>
        {/* single product image end */}

        {/* single product details start */}
        <div className="flex flex-col gap-y-2"> {/* Reduced gap for a tighter look */}
          <div className='flex flex-col gap-y-1'>
            <p className='font-second font-normal text-xs text-light-gray uppercase'>Category</p>
            <h3 className='font-prime font-normal text-[20px] md:text-[24px] text-dark-gray leading-9 capitalize'>Title</h3> {/* Responsive text size */}
          </div>
          <p className='font-second font-normal text-[16px] text-light-gray'>IDR</p>
        </div>
        {/* single product details end */}

      </div>

    </div>
  )
}

export default SingleProduct