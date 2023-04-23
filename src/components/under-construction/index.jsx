import React, { useState } from 'react'
import { BsGearFill } from "react-icons/bs";

const UnderConstruction = () => {
  const [date, setDate] = useState(new Date())

  return (
    <React.Fragment>
      <div className='flex flex-col justify-center text-center  border border-off-white rounded-md mt-52'>
        <div className='w-full h-9 bg-off-white'>
          <div className='flex flex-row align-middle justify-start px-2 py-2 space-x-1'>
            <div className='rounded-xl hover:bg-red w-5 h-5 transition duration-300 ease-in-out border border-black '></div>
            <div className='rounded-xl hover:bg-lime-yellow transition duration-300 ease-in-out w-5 h-5 border border-black'></div>
            <div className='rounded-xl hover:bg-lime-green transition duration-300 ease-in-out w-5 h-5 border border-black'></div>
          </div>
        </div>
        <div className='p-10'>
          <div className='flex align-middle justify-center space-x-6'>
            <BsGearFill className='text-yellow text-6xl animate-spin transition-all rotate-180' />
            <p className='text-6xl font-extrabold text-off-white'>
              Site Under Construction
            </p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <p className='text-xl font-bold text-yellow mt-3'>Coming Soon</p>
            <p className='text-xl font-bold animate-bounce text-yellow mt-3 ms-3'>...</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UnderConstruction