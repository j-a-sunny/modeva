import React from 'react'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='w-full h-screen bg-[#00000079] fixed z-10 top-0 right-0'>
      <div className='w-100 h-screen ml-auto bg-white p-3'>
        <h2 className='text-3xl font-semibold font-poppins text-second'>Cart</h2>


        <div className="flex items-center justify-between">
          <p className='text-lg font-medium font-poppins text-primary'>Total</p>
          <p className='text-lg font-semibold font-poppins text-primary'>$999.99</p>
        </div>
        <Link to={'/'} className='w-full inline-block my-3 py-3 px-5 bg-second text-white text-center 
 text-lg rounded-4xl' >Check out</Link>
      </div>
    </div>
  )
}

export default Cart
