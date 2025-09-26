import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowSmallRight, HiStar } from 'react-icons/hi2'

const OutfitWomen = () => {
  return (
    <div className='container flex flex-col py-8 px-10 bg-yellow-400 gap-y-8'>
      <div>
        <h2 className='font-prime uppercase font-medium text-[76px]'>the best dress for the best woman</h2>
      </div>
      
      {/* product carasoul div */}
      <div className="product flex justify-between">

{/* single product */}
        <div className="singleProduct flex flex-col gap-y-4">

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
{/* single product */}
        <div className="singleProduct flex flex-col gap-y-4">

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
        {/* single product */}
        <div className="singleProduct flex flex-col gap-y-4">

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
        {/* single product */}
        <div className="singleProduct flex flex-col gap-y-4">

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
      <div className="">
        <button className="inline-flex items-center justify-center px-8 py-4 font-second font-semibold text-[16px] text-white bg-primary uppercase">
          see more<HiOutlineArrowSmallRight />
        </button>
      </div>
    </div>
  )
}

export default OutfitWomen