import React from 'react'
import Slider from "react-slick";

const Testimony = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="w-full h-48 bg-gradient-to-b from-background from-50% to-primary to-50%">
      <div className="py-[96px] slider-container container bg-background">
        <Slider {...settings}>

          <div className="">
            <Testimony />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimony