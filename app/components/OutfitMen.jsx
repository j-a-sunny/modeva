'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import { HiOutlineArrowSmallRight } from 'react-icons/hi2'
import SingleProduct from './SingleProduct'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OutfitMen = () => {
  const [products, setProducts] = useState([])

  // ✅ Fetch men’s products
  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.freeapi.app/api/v1/public/randomproducts',
        params: {
          page: '1',
          limit: '10',
          inc: 'category,price,thumbnail,images,title,id',
          query: 'men' 
        },
        headers: { accept: 'application/json' }
      }

      try {
        const { data } = await axios.request(options)
        const items = data.data?.data?.slice(0, 8) || []
        setProducts(items)
      } catch (error) {
        console.error('Error fetching men’s products:', error)
      }
    }

    fetchProducts()
  }, [])

  // ✅ Same slider settings as women’s section
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <div className="container flex flex-col py-8 gap-y-8">
      <div>
        <h2 className="font-prime font-medium text-[36px] md:text-[56px] lg:text-[76px] leading-tight md:leading-[1.1] uppercase">
          Best outfit for your happiness
        </h2>
      </div>

      {/* ✅ Same slick slider structure as women */}
      <div className="slider-container w-full">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <SingleProduct
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                category={product.category}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex">
        <button className="inline-flex items-center justify-center px-8 py-4 font-second font-semibold text-[16px] text-white bg-primary uppercase">
          see more <HiOutlineArrowSmallRight />
        </button>
      </div>
    </div>
  )
}

export default OutfitMen
