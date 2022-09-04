import React from 'react'

const Warning = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video className="min-w-full min-h-full absolute object-cover" src="/background.mp4" type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="welcomeDiv video-content">
      <h1 className='m-16 '>Better viewed on desktop :p</h1>

    </div>
  </div>
  )
}

export default Warning