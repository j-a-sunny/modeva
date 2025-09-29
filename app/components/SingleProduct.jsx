import React from 'react'
import { HiOutlineShoppingCart, HiStar } from 'react-icons/hi2'

const SingleProduct = () => {
  return (
    <div className='singleProduct flex justify-center items-center'>
      {/* single product */}
      <div className="flex flex-col gap-y-4 w-full"> {/* Set width to full to use grid space */}

        {/* single product image start - Now uses aspect ratio */}
        <div className="w-full group aspect-[3/4] z-1 bg-[url('/heroBanner.png')] bg-cover bg-center  relative">

          {/* rating inside the pic - Added absolute positioning */}
          <div className='absolute top-3 right-3 -z-1 flex place-self-end w-fit items-center justify-between gap-1 bg-primary px-2 py-1 rounded-full font-second font-normal text-[14px] md:text-[16px]'>
            <HiStar className='text-[#FFE605]' />
            <p className='text-white'>4.4</p>
          </div>
          {/* button visible on hover */}
          <div className="w-full h-full
          flex items-center justify-center p-4
          bg-[#ffffff4d]
          opacity-0 group-hover:opacity-100
          transition-all duration-400">
            <button className="h-[72px] w-full flex items-center justify-center
            p-6 gap-2
            font-normal font-second
            tracking-wide text-white bg-blue-500">
              <span className="w-full uppercase text-xl">
                add to cart
              </span>
              <HiOutlineShoppingCart className='text-2xl' />
            </button>
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