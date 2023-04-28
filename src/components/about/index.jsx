import React from 'react'
import { MdComputer } from "react-icons/md"
import { FaServer, FaMobileAlt } from "react-icons/fa"
import { intro } from '../../data/contents'


const About = () => {
  return (
    <React.Fragment>
      <div className='flex items-center justify-start w-full gap-2 p-4 mt-8 sm:mt-5 sm:flex-col md:flex-row'>
        <div className='flex flex-col w-full gap-2'>

          <div className='flex items-center justify-between w-full p-4 rounded-md bg-dark-gray hover:shadow-sm hover:shadow-off-white h-36'>
            <div className='flex flex-col items-start justify-start w-10/12'>
              <h3 className='font-mono text-2xl font-semibold text-green'>Front-End</h3>
              <p className='mt-3 text-off-white'>Develop optimised code for web using React.js and Next.js</p>
            </div>
            <div className='flex items-center'>
              <MdComputer className='text-2xl text-off-white' />
            </div>
          </div>

          <div className='flex items-center justify-between w-full p-4 rounded-md bg-dark-gray hover:shadow-sm hover:shadow-off-white h-36'>
            <div className='flex flex-col items-start justify-start w-10/12'>
              <h3 className='font-mono text-2xl font-semibold text-green'>Back-End</h3>
              <p className='mt-3 text-off-white'>Develop REST APIs using node.js</p>
            </div>
            <div className='flex items-center'>
              <FaServer className='text-2xl text-off-white' />
            </div>
          </div>

          <div className='flex items-center justify-between w-full p-4 rounded-md bg-dark-gray hover:shadow-sm hover:shadow-off-white h-36'>
            <div className='flex flex-col items-start justify-start w-10/12'>
              <h3 className='font-mono text-2xl font-semibold text-green'>Mobile</h3>
              <p className='mt-3 text-off-white text'>Develop mobile applications for Android and iOS using React Native</p>
            </div>
            <div className='flex items-center'>
              <FaMobileAlt className='text-2xl text-off-white' />
            </div>
          </div>

        </div>
        <div className='w-full gap-2 p-4 sm:mt-10 md:mt-0'>
          <h3 className='mb-10 text-sm font-semibold opacity-50 text-off-white'>Introduction</h3>
          <h1 className='font-mono text-4xl font-bold text-off-white'>Hi there! {"I'm"} Dony M Varkey</h1>
          <p className='mt-10 italic text-off-white text-md'>{"'There are only two hard things in computer science: cache invalidation and naming variables'"}</p>
          <p className='mt-8 text-justify text-off-white'>{intro}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About