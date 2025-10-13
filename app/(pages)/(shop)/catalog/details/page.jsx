import React from 'react'
import { HiStar } from 'react-icons/hi2'

const page = () => {
  return (
    <div className='mt-100'>
      <div className=""></div>
      <div className="">
        <div className="flex justify-between font-second ">
          <span className="text-light-gray">category</span>
          <span className="flex text-dark-gray"> <HiStar className='text-[#FFE605]' /> rating</span>
        </div>
        <h3 className="uppercase font-prime font-medium text-[76px] text-dark-gray">Product name</h3>
      </div>
    </div>
  )
}

export default page