import React from 'react'

const Bento = () => {
  return (
    <div className='flex flex-col sm:flex-row container gap-8 py-8 font-prime font-medium text-[36px] lg:text-5xl text-white uppercase'>
      {/* formal */}
      <div className="flex sm:w-1/2 w-full flex-col gap-y-8">
        <div className="flex items-end justify-baseline w-full h-[374] bg-[url('/formal-woman.png')] bg-cover bg-center p-[30px] ">formal woman</div>
        <div className="flex items-end justify-baseline w-full h-[374] bg-[url('/formal-man.png')] bg-cover bg-center p-[30px] ">formal man</div>
      </div>
      {/* casual */}
      <div className="flex items-center sm:w-1/2 w-full h-[780px] bg-[url('/casual.png')] bg-cover bg-center p-[55px]">casual style</div>
    </div>
  )
}

export default Bento