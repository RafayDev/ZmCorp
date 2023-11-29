import React from 'react'

const Video = () => {
  return (
    <div>
        <video autoPlay loop muted className="min-w-full sm:h-3/4   lg:h-3/4    ">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div  className="absolute bg-opacity-50 top-1/4 rounded-lg left-1/2 bg-black transform -translate-x-1/2 -translate-y-1/2 text-center  text-white ">
        <h1 className="text-xs sm:text-xl md:text-2xl font-bold lg:text-4xl xl:text-6xl">
          ZM CORP
        </h1>
        <p className="max-w-3xl text-xs mt-1  sm:text-sm md:text-md lg:text-lg xl:text-xl">
          Equipped with years of experience in Defence Consultancy, our team of
          dedicated experts can analyze and assess information to find a
          customized best-fit solution for our clients needs and successfully
          deliver projects.
        </p>
      </div>
    </div>
  )
}

export default Video