import React from 'react'
import { HiStar } from 'react-icons/hi2'

const SingleProduct = () => {
  return (
    <div className='singleProduct flex justify-center items-center'>
      {/* single product */}
      <div className="flex flex-col gap-y-4">

        {/* single product image start */}
        <div className="w-[315px] h-[420px] bg-[url('/heroBanner.png')] bg-cover bg-center px-2 py-3">

          {/* rating inside the pic*/}
          <div className='flex place-self-end w-fit items-center justify-between gap-1 bg-primary px-2 py-1 rounded-full font-second font-normal text-[16px]'>
            <HiStar className='text-[#FFE605]' />
            <p className='text-white'>4.4</p>
          </div>
        </div>
        {/* single product image end */}

        {/* single product details start */}
        <div className="flex flex-col gap-y-4">
          <div className='flex flex-col gap-y-1'>
            <p className='font-second font-normal text-xs text-light-gray uppercase'>Category</p>
            <h3 className='font-prime font-normal text-[28px] text-dark-gray leading-9 capitalize'>Title</h3>
          </div>
          <p className='font-second font-normal text-[16px] text-light-gray'>IDR</p>
        </div>
        {/* single product details end */}

      </div>

    </div>
  )
}

export default SingleProduct