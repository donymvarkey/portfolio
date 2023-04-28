import React from 'react'
import picture from '../../assets//self.png'
import reactIcon from "../../assets/react.svg"
import nodeIcon from "../../assets/node-js.svg"
import nextIcon from "../../assets/next-js-white.svg"
const Hero = () => {
  return (
    <React.Fragment>
      <div className='p-4 md:mt-5 sm:justify-center'>
        <div className='flex justify-between p-4 sm:flex-col sm:items-center md:flex-row '>
          {/* Left Container */}
          <div className='flex items-center justify-center w-full md:mt-16'>
            <div className='flex flex-col items-start justify-center gap-3 px-2'>

              {/* -------------------------- Full stack developer start ---------------------------- */}
              <div className='flex items-center justify-center h-full align-middle'>
                <div className='px-3 py-2 rounded-sm bg-green'>
                  <p className='font-semibold text-center text-black'>Full-Stack Developer</p>
                </div>
              </div>
              {/* -------------------------- Full stack developer end ---------------------------- */}

              {/* -------------------------- Hero Comment start ------------------------------------ */}
              <div className='flex flex-col justify-start h-full mt-10'>
                <p className='font-mono text-off-white sm:text-3xl md:text-4xl lg:text-5xl'>Talk is Cheap</p>
                <p className='font-mono text-off-white sm:text-3xl md:text-4xl lg:text-5xl'>Show me <span className='font-bold text-green'>{"<Code />"}</span></p>
              </div>
              <div className='w-2/3 mt-8 opacity-75 sm:w-full sm:text-justify'>
                <p className='text-off-white'>From frontend to backend, I bring full stack expertise to develop seamless digital solutions.</p>
              </div>
              {/* -------------------------- Hero Comment end ------------------------------------ */}


            </div>

          </div>

          {/* Right container */}
          <div className='flex justify-center w-full'>
            <div className='absolute'>
              <div className='relative w-64 h-64 rounded-full bg-dark-gray top-3 opacity-40 blur-lg' />
            </div>

            {/* Images section */}
            <div className='z-10 flex items-center justify-center align-middle'>
              <div className="absolute sm:hidden md:block">
                <img src={reactIcon} className='relative p-4 rounded-full top-36 md:-left-28 lg:-left-40 md:w-16 md:h-16 lg:w-24 lg:h-24 animate-spin bg-dark-gray' />
                <img src={nodeIcon} className='relative p-3 rounded-full top-36 md:left-44 lg:left-44 md:w-14 md:h-14 lg:w-22 lg:h-22 animate-bounce bg-dark-gray' />
                <img src={nextIcon} className='relative -top-48 md:left-36 lg:left-46 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-pulse' />
              </div>
              <img className='sm:h-full' src={picture} />
            </div>

          </div>
        </div>
        {/* ----------------------------- Experience div start ------------------------------------- */}
        <div className='flex w-full p-4 mt-8 sm:justify-center'>
          <div className='flex w-full gap-3 md:flex-row md:items-center md:justify-around sm:justify-center sm:flex-col sm:items-start'>
            <div className='flex items-center space-x-4'>
              <p className='text-5xl font-bold text-green'>3.5</p>
              <p className='break-words opacity-50 text-off-white'>Years of <br /> Experience</p>
            </div>
            <div className='flex items-center space-x-4'>
              <p className='text-5xl font-bold text-green'>6</p>
              <p className='break-words opacity-50 text-off-white'>Projects</p>
            </div>
            <div className='flex items-center space-x-4'>
              <p className='text-5xl font-bold text-green'>3</p>
              <p className='break-words opacity-50 text-off-white'>Organizations</p>
            </div>
          </div>
        </div>
        {/* ----------------------------- Experience div start ------------------------------------- */}
      </div>
    </React.Fragment>
  )
}

export default Hero