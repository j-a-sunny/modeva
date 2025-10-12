import CartSingleProduct from '@/app/components/CartSingleProduct'
import React from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'



  let data = await fetch('https://api.vercel.app/blog')
  console.log(data);
  let posts = await data.json()


const cart = () => {
  return (
    <div className='container pb-20'>
      <div className="font-prime font-medium text-[76px] uppercase">cart</div>


      <div className="grid sm:grid-cols-12 gap-2 w-full mx-auto ">

        {/* product part */}
        <div className="flex flex-col col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-8 gap-y-10">
          <CartSingleProduct />
          <CartSingleProduct />
          <CartSingleProduct />
          <CartSingleProduct />
          <CartSingleProduct />
        </div>

        {/* hidden part */}
        <div className="hidden md:block col-span-1"></div>

        {/* price part */}
        <div className="flex flex-col col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3 gap-y-8 p-2">
          <span className="uppercase font-second font-semibold text-[32px]">shopping info</span>
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-between items-center font-second text-[16px] bg-[#ede5e1] px-4 py-3">
              <div><span className='text-dark-gray'>Hooray! You have promo code!</span>
                <span className="text-primary underline">Use promo code</span></div>
              <span className=""><HiOutlineXMark className='text-primary' /></span>
            </div>
            <span className="text-light-gray flex justify-between">
              <span>sub</span>
              <span>sub$</span>
            </span>
            <span className="flex justify-between">
              <span>total</span>
              <span>total$</span>
            </span>
          </div>
          <button className='bg-primary p-6 w-full font-second text-white uppercase'>proceed to checkout</button>
        </div>
      </div>


    </div>
  )
}

export default cart