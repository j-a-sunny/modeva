import { HiOutlineTrash } from "react-icons/hi";
import Image from 'next/image'
import React from 'react'

const CartSingleProduct = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex gap-6 w-full">
        {/* prod image */}

        <div className="relative aspect-[116/155] w-full max-w-[116px] overflow-hidden flex items-center justify-center bg-gray-50">
          <Image
            src="/prod1.png"
            alt="alt"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* prod info */}
        <div className="flex flex-col w-full justify-between">
          {/* info */}
          <div className="flex flex-col gap-y-3">
            <span className="uppercase font-second text-2xl">Product name</span>
            <span className="flex flex-col uppercase font-second text-xl gap-y-2">

              <span className="flex text-light-gray items-center gap-2">
                <span className="line-through">original</span>
                <span className="px-3 py-1 text-xs text-white rounded-full bg-[#E90000]">50%</span>
              </span>
              <span className="text-[#E90000]">$discount</span>
            </span>
          </div>
          {/* quantity */}
          <div className=" mt-4 font-second flex items-center justify-between">
            <span className="font-medium text-dark-gray border py-[14.5] px-2">- 1 +</span>
            <span className="flex items-center gap-2 font-normal text-[#929292]"><HiOutlineTrash />Delete</span>
          </div>
        </div>
      </div>
      {/* prod notes */}
      <div className="font-second text-[#B4B4B4] flex flex-col">
        <span className="text-2xl">Notes:</span>
        <span className="text-xl border border-dark-gray px-3 py-4">Eg: Please double check before packing.</span>
      </div>
    </div>
  )
}

export default CartSingleProduct