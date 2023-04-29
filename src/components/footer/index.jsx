import React from 'react'
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsFillHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='p-4 mt-10'>
        <div className='flex items-center space-x-4 sm:justify-center md:justify-end'>
          <p className='text-off-white text-md opacity-50'>Follow Me on</p>
          <a href="https://www.instagram.com/dony_varkey/" target='_blank' rel="noreferrer">
            <BsInstagram className='text-off-white text-2xl opacity-30 hover:opacity-100' />
          </a>
          <a href='https://github.com/donymvarkey' target='_blank' rel="noreferrer">
            <BsGithub className='text-off-white text-2xl  opacity-30 hover:opacity-100' />
          </a>
          <a href='https://www.linkedin.com/in/donymvarkey/' target='_blank' rel="noreferrer">
            <BsLinkedin className='text-off-white text-2xl  opacity-30 hover:opacity-100' />
          </a>
          <a href='https://twitter.com/donymvarkey' target='_blank' rel="noreferrer">
            <BsTwitter className='text-off-white text-2xl  opacity-30 hover:opacity-100' /></a>
        </div>
        <hr className='border-off-white my-2 opacity-20' />
        <div>
          <p className='text-off-white text-md text-center opacity-60'>&copy;2023. All Rights Reserved.</p>
          <p className='text-off-white text-md text-center opacity-60 flex items-center justify-center'>Developed with <BsFillHeartFill className='text-red mx-3' /> by Dony M Varkey</p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer