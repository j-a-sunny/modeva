import React from 'react'
import Slider from 'react-slick';
import Review from './Review';


const settings = {
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true
};


const Testimony = () => {
  return (
    <div className="w-full bg-gradient-to-b from-background from-50% to-primary to-50%">
      <div className="py-[96px] slider-container container bg-background">
        <Slider {...settings}>
          <div className="px-3">
          <Review />
          </div>
          <div className="px-3">
          <Review />
          </div>
          <div className="px-3">
          <Review />
          </div>
          <div className="px-3">
          <Review />
          </div>
          <div className="px-3">
          <Review />
          </div>
          <div className="px-3">
          <Review />
          </div>
        </Slider>

      </div>
    </div>
  )
}

export default Testimony