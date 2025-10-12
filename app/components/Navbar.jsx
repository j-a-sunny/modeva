'use client'
import { HiOutlineChevronDown, HiOutlineShoppingCart, HiOutlineUser, HiSearch } from "react-icons/hi";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

// import logo from ''
import favicon from '../icon.svg'

import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Cart from './Cart';
import Offer from './Offer';






export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  // const [cart, setCart] = useState(true);

  return (
    <>
      {/* Offer Alert */}
      <Offer
        mainText="Discount 20% For New Member ,"
        highlightText="ONLY FOR TODAY!!"
      />
      <nav id='mainNav' className='relative z-99'>

        {/* Mobile popup menu start */}
        <div className={`flex container px-4 text-white dark:text-white -translate-x-1/2 absolute top-16 ${showNav ? 'left-1/2 md:hidden' : ' -left-1/2'} transition-all duration-400 ease-in-out`}>
          <ul className='flex flex-col items-center  justify-around w-full py-4 gap-y-4 bg-dark-gray '>
            <Link
              href={{
                pathname: '/',
                query: { name: 'catalog' },
              }}
              className="flex items-center gap-2"
            >
              Catalog <HiOutlineChevronDown />
            </Link>
            <Link
              href={{
                pathname: '/',
                query: { name: 'sale' },
              }}
            >
              Sale
            </Link>
            <Link
              href={{
                pathname: '/',
                query: { name: 'new' },
              }}
            >
              New Arrival
            </Link>
            <Link
              href={{
                pathname: '/',
                query: { name: 'about' },
              }}
            >
              About
            </Link>
            <Link
              href={{
                pathname: '/cart',
                query: { name: 'cart' },
              }}
            >
              <span className="flex">Cart
                <span className='w-[15px] h-[15px] bg-primary rounded-full flex justify-center items-center text-[12px] text-white dark:text-white font-poppins font-medium '>3</span></span>
            </Link>
          </ul>
        </div>
        {/* Mobile popup menu end */}


        {/*  */}
        <div className='menuRow container md:h-25 h-15.5 px-4 flex items-center '>

          {/* LOGO PART START */}
          <Link href="/" className='logo'>
            <Image
              src="/logo.svg"
              alt="logo"
              width={202}
              height={62}
              className='hidden md:block'
            />

            <Image
              src="/icon.svg"
              width={24}
              height={24}
              alt="Picture of the author"
              className='md:hidden'
            />
          </Link>
          {/* LOGO PART END */}

          {/* Link part start */}
          <div className="hidden lg:flex mx-auto">
            <ul className='flex text-dark-gray dark:text-white items-center justify-around w-full gap-8'>
              <Link
                href={{
                  pathname: '/catalog',
                  query: { name: 'catalog' },
                }}
                className="flex items-center gap-2"
              >
                Catalog <HiOutlineChevronDown />
              </Link>
              <Link
                href={{
                  pathname: '/sale',
                  query: { name: 'sale' },
                }}
              >
                Sale
              </Link>
              <Link
                href={{
                  pathname: '/new',
                  query: { name: 'new' },
                }}
              >
                New Arrival
              </Link>
              <Link
                href={{
                  pathname: '/about',
                  query: { name: 'about' },
                }}
              >
                About
              </Link>
            </ul>

          </div>


          {/* Searchbar start */}
          <div className='menuSrc
          w-fit md:w-53.25
          h-6 md:h-8.25
          max-lg:mx-auto
          bg-[#F8F8F8] dark:bg-[#111827]
          md:p-2 p-1
          md:gap-2 gap-1
          items-center flex'>
            <HiSearch className='md:text-[16px] text-[14px] text-[#9c9c9c]' />

            <input
              className='w-full
              outline-none border-none
              font-second font-regular
              text-[12px] md:text-[14px]
              text-dark-gray dark:text-light-gray'
              type="text"
              placeholder='Search' />

          </div>
          {/* Searchbar end */}

          {/* Menu buttons start */}
          <div className='menuButtons flex justify-center items-center gap-3 lg:ml-6 md:gap-6'>

            {/* user button */}
            <button
              className='hidden md:block'
            >
              <HiOutlineUser
                className='text-dark-gray dark:text-light-gray text-[24px]'
              />
            </button>
            {/* cart button */}

            <Link
              href={{
                pathname: '/cart',
                query: { name: 'cart' },
              }}
            >            <button
              className='relative hidden md:block'
            >
                <HiOutlineShoppingCart
                  className='text-dark-gray dark:text-light-gray text-[24px]'
                />

                <span
                  className='
              notificationBadge
              flex absolute justify-center items-center
              top-[-8px] left-4
              w-5 h-5 rounded-full
              font-second font-medium text-white text-0.5
              bg-light-gray'>3</span>
              </button>
            </Link>

            {/* Hamburger menu */}
            <button onClick={() => setShowNav(!showNav)} className='relative md:hidden'>
              <div className='relative w-6 h-9 scale-70 flex flex-col justify-center items-center'>
                <span className={`h-1 bg-light-gray dark:bg-white absolute rounded-full duration-400 ease-in-out ${showNav ? 'rotate-45 w-5/4 top-4' : 'w-full top-2'}`}></span>
                <span className={` h-1 bg-light-gray dark:bg-white absolute rounded-full duration-400 ease-in-out ${showNav ? 'w-0' : 'w-full'}`}></span>
                <span className={`h-1 bg-light-gray dark:bg-white absolute rounded-full duration-400 ease-in-out ${showNav ? '-rotate-45 w-5/4 bottom-4' : 'w-full bottom-2'}`}></span>
              </div>


              <span className={`w-[15px] h-[15px] bg-primary rounded-full flex justify-center items-center text-[12px] text-[#fff] font-poppins font-medium absolute top-1/2  ${!showNav || 'hidden'}`}>3</span>

            </button>

            {/* <Cart /> */}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

