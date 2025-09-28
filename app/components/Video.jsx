import React from 'react'

const Video = () => {
  return (
    <div className="container py-8">
      <iframe
      src="https://www.youtube.com/embed/77A0iIGT3RQ?autoplay=1&mute=1&loop=1&playlist=77A0iIGT3RQ&controls=0&si=dZ7MfrgdvT4Bcjpy"
      allow="autoplay"
      allowFullScreen
      className='w-full aspect-video'
    />
    </div>
  )
}

export default Video