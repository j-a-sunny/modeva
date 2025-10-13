import React from 'react'
import { HiOutlineShoppingCart, HiStar } from 'react-icons/hi2'

const SingleProduct = ({ title, price, image, category }) => {
  return (
    <div className="singleProduct flex justify-center items-center">
      <div className="flex flex-col gap-y-4 w-full">
        
        {/* ✅ Product image */}
        <div
          className="w-full group aspect-[3/4] z-1 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary px-2 py-1 rounded-full font-second text-sm">
            <HiStar className="text-[#FFE605]" />
            <p className="text-white">4.4</p>
          </div>

          {/* hover button */}
          <div className="w-full h-full flex items-center justify-center p-4 bg-[#ffffff4d] opacity-0 group-hover:opacity-100 transition-all duration-400">
            <button className="h-[72px] w-full flex items-center justify-center gap-2 font-second text-white bg-primary uppercase text-xl">
              add to cart
              <HiOutlineShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>

        {/* ✅ Product details */}
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1">
            <p className="font-second text-xs text-light-gray uppercase">{category}</p>
            <h3 className="font-prime text-[20px] md:text-[24px] text-dark-gray leading-9 capitalize">{title}</h3>
          </div>
          <p className="font-second text-[16px] text-light-gray">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
