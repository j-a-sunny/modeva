import React from 'react'

const Bento = () => {
  return (
    <div className='flex container gap-8 py-8 font-prime font-medium text-5xl uppercase'>
      {/* formal */}
      <div className="flex w-1/2 flex-col gap-y-8">
        <div className="flex items-center w-full h-[374] bg-[url('/formal-woman.png')] bg-cover bg-center p-[30px] ">formal woman</div>
        <div className="flex items-center w-full h-[374] bg-[url('/formal-man.png')] bg-cover bg-center p-[30px] ">formal man</div>
      </div>
      {/* casual */}
      <div className="flex items-center w-1/2 h-[780px] bg-[url('/casual.png')] bg-cover bg-center p-[55px]">casual style</div>
    </div>
  )
}

export default Bento