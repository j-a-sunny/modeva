'use client';
import Image from 'next/image'
import Slider from 'react-slick'
import React from 'react'
import { HiOutlineArrowSmallRight, HiStar } from 'react-icons/hi2'
import SingleProduct from './SingleProduct'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  slidesToShow: 4, // default for large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // below xl
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // below lg
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // below md
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // below sm (phones)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const OutfitWomen = () => {

  return (
    <div className='container flex flex-col py-8 gap-y-8'>
      <div>
        <h2 className='font-prime font-medium text-[36px] md:text-[56px] lg:text-[76px] leading-tight md:leading-[1.1] uppercase'>the best dress for the best woman</h2>
      </div>

      {/* product carasoul div - Updated Grid */}
      {/* < className="product grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}

      {/* single product */}
      <div className="slider-container w-full">
        <Slider {...settings}>
          <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>        <div className="p-2">
            <SingleProduct />
          </div>

        </Slider>

      </div>

      <div className="flex"> {/* Added flex justify-center to center the button */}
        <button className="inline-flex items-center justify-center px-8 py-4 font-second font-semibold text-[16px] text-white bg-primary uppercase">
          see more<HiOutlineArrowSmallRight />
        </button>
      </div>
    </div>
  )
}

export default OutfitWomen