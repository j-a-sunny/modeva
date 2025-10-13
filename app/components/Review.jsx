import Image from 'next/image'
import React from 'react'
import { HiStar } from 'react-icons/hi2'

const Review = ({ name, date, rating, text, avatar }) => {
  return (
    <div className="w-full h-40 flex flex-col gap-y-3 p-4 font-second text-xs bg-background">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full aspect-square w-9 h-9"
            src={avatar || "/user.png"}
            alt={`${name}'s profile picture`}
            width={36}
            height={36}
          />
          <div className="flex flex-col gap-y-1">
            <span className="uppercase">{name}</span>
            <span className="capitalize text-gray-500">{date}</span>
          </div>
        </div>

        <div className="flex text-[16px] text-[#FFE605]">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className={i < rating ? 'opacity-100' : 'opacity-30'} />
          ))}
        </div>
      </div>

      {/* Review text */}
      <div className="leading-[135%]">{text}</div>
    </div>
  )
}

export default Review
