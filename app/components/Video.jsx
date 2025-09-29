import React from 'react'

const Video = () => {
  return (
    <div className="container py-8">

      {/* ! Video Playlist Example */}
      <iframe
        // Base URL is correct for a playlist using the privacy-enhanced domain
        // We add the required parameters for your desired functionality
        src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0cA19vPhtoXfSpSGq4Hi00YGRaRKBSMS&autoplay=1&mute=1&loop=1&controls=0&rel=0"

        // frameborder and title are not required in React JSX, but allowFullScreen is.
        // The allow attribute should be updated for modern autoplay requirements.
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen

        // Tailwind classes for size/aspect ratio
        className='w-full aspect-video'

        // Recommended attributes for better compatibility and appearance
        title="YouTube video player"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* ! Single Video Example */}

      {/* <iframe
        src="https://www.youtube.com/embed/77A0iIGT3RQ?autoplay=1&mute=1&loop=1&playlist=77A0iIGT3RQ&controls=0&rel=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className='w-full aspect-video'
      /> */}
    </div>
  )
}

export default Video