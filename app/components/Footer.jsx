import { HiOutlineExternalLink } from "react-icons/hi";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-primary py-12 max-md:px-4">
      <div className='container flex flex-col w-full gap-y-9 text-white font-second'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10.5">
          <div className=" text-xs">
            <Link href="/" passHref>
              <Image
                src="/logo-white.svg"
                alt="alt"
                width={145}
                height={62}
                className='mb-2 h-[32px]'
              />
            </Link>
            <div>
              <Link href="https://wa.me/+8801946068153" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Whatsapp <HiOutlineExternalLink />
              </Link>
              <address>
                <Link href="mailto:rititafashion@gmail.com">Email : rititafashion@gmail.com</Link><br />
                Address <br />
                Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</address>
            </div>
          </div>
          <div className="">
            <p className='mb-3 font-bold text[14px]'>Menu</p>
            <div className='flex flex-col gap-y-2 text-xs'>
              <Link href="href">Sale</Link>
              <Link href="href">New Arrivals</Link>
              <Link href="href">Formal Men</Link>
              <Link href="href">Formal Women</Link>
              <Link href="href">Casual Men</Link>
              <Link href="href">Casual Women</Link>
            </div>
          </div>
          <div className="">
            <p className='mb-3 font-bold text[14px]'>Get Help</p>
            <div className='flex flex-col gap-y-2 text-xs'>
              <Link href="href">FAQ</Link>
              <Link href="href">Customer Service</Link>
              <Link href="href">Refund and Return</Link>
              <Link href="href">Terms and Conditions</Link>
              <Link href="href">Shipping</Link>
            </div>
          </div>
          <div className="">
            <p className='mb-3 font-bold text[14px]'>Account</p>
            <div className='flex flex-col gap-y-2 text-xs'>
              <Link href="href">My Account</Link>
              <Link href="href">My Orders</Link>
              <Link href="href">Vouchers and Discounts</Link>
            </div>
          </div>
        </div>

        {/* Copyright Disclaimer Start */}
        <div className="flex flex-col items-center justify-center text-xs font-second">
          <span className="">All rights reserved </span>
          <span className="">Copyright 2023 By Modeva Fashion</span>
        </div>
        {/* Copyright Disclaimer End */}
      </div>
    </div>
  )
}

export default Footer