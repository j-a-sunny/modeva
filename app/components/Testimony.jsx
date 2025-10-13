'use client'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Review from './Review'

const settings = {
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}

const Testimony = () => {
  const [reviews, setReviews] = useState([])

  // Dummy data (replace with API fetch later)
  useEffect(() => {
    const sampleReviews = [
      {
        id: 1,
        name: "Ahsan Rahman",
        date: "Sep 21, 2025",
        rating: 5,
        text: "Loved the outfit quality and fit! Definitely coming back for more.",
        avatar: "/user.png",
      },
      {
        id: 2,
        name: "Jannatul Ferdous",
        date: "Oct 01, 2025",
        rating: 4,
        text: "The colors were just as shown. Delivery was smooth and quick.",
        avatar: "/user.png",
      },
      {
        id: 3,
        name: "Rafiul Islam",
        date: "Aug 12, 2025",
        rating: 5,
        text: "Fantastic craftsmanship! The stitching was top-notch.",
        avatar: "/user.png",
      },
      {
        id: 4,
        name: "Taslima Akter",
        date: "Jul 30, 2025",
        rating: 5,
        text: "Comfortable and stylish — my go-to brand now!",
        avatar: "/user.png",
      },
      {
        id: 5,
        name: "Mahmud Hossain",
        date: "Sep 05, 2025",
        rating: 4,
        text: "Great value for money. Highly recommend!",
        avatar: "/user.png",
      },
    ]
    setReviews(sampleReviews)
  }, [])

  return (
    <div className="w-full bg-gradient-to-b from-background from-50% to-primary to-50%">
      <div className="py-[96px] slider-container container bg-[#F2F2F2]">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <Review {...review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimony
