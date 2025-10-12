import Image from 'next/image'
import React from 'react'
import { HiStar } from 'react-icons/hi2'

const Review = () => {
  return (
    <div className=' w-full h-40 flex flex-col gap-y-3 p-4 font-second text-xs bg-background '>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image className='rounded-full aspect-square w-9 h-9' src="/user.png" alt="profile picture" width={36} height={36} />
          <div className="flex flex-col gap-y-2">
            <span className="uppercase">name</span>
            <span className="capitalize">date</span>
          </div>
        </div>

        <div className="flex text-[16px] text-[#FFE605] "><HiStar/><HiStar/><HiStar/><HiStar/><HiStar/> </div>
      </div>

      <div className=" leading-[135%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugit rerum deleniti fuga maiores optio libero a itaque debitis laboriosam vitae reiciendis ea nostrum accusamus tempora veritatis numquam sequi, quas delectus eos earum architecto illum consectetur. Eos doloribus ab laudantium.</div>
    </div>
  )
}

export default Review