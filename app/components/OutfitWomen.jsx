import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowSmallRight, HiStar } from 'react-icons/hi2'
import SingleProduct from './SingleProduct'

const OutfitWomen = () => {
  return (
    <div className='container flex flex-col py-8 bg-yellow-400 gap-y-8'>
      <div>
        <h2 className='font-prime font-medium text-[36px] md:text-[56px] lg:text-[76px] leading-tight md:leading-[1.1] uppercase'>the best dress for the best woman</h2>
      </div>

      {/* product carasoul div */}
      <div className="product grid gap-y-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">

        {/* single product */}
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />

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