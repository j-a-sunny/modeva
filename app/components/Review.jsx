import React from 'react'

const Review = () => {
  return (
    <div className='flex flex-col gap-y-3 p-4 font-second '>
      <div className="flex justify-between items-center">
        <div className="">
          <Image src="src" alt="profile picture" width={36} height={36} />
          <div className="flex flex-col gap-y-2">
            <span className="">name</span>
            <span className="">date</span>
          </div>
        </div>

        <div className="">*****</div>
      </div>

      <div className=" leading-[]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugit rerum deleniti fuga maiores optio libero a itaque debitis laboriosam vitae reiciendis ea nostrum accusamus tempora veritatis numquam sequi, quas delectus eos earum architecto illum consectetur. Eos doloribus ab laudantium.</div>
    </div>
  )
}

export default Review