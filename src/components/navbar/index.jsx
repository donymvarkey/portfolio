
const Navbar = () => {
  return (
    <div className='py-4 mx-auto max-w-screen-6xl'>
      <div className='flex items-center justify-between'>
        <a href="/">
          <div className='flex text-4xl text-off-white sm:ms-5'>
            <p className='font-bold me-2'>Dony</p><span className='font-light'>M Varkey</span>
          </div>
        </a>
        <div className="hidden w-full md:block md:w-auto me-3">
          <ul className="flex flex-col p-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li className="relative group">
              <a href="/projects" className="block py-2 pl-3 pr-4 transition-all ease-in rounded text-off-white hover:text-green md:border-0 md:hover:text-green md:p-0">About</a>
              <span className="absolute w-0 h-1 -bottom-1 left-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute w-0 h-1 -bottom-1 right-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="/projects" className="block py-2 pl-3 pr-4 rounded text-off-white hover:text-green md:border-0 md:hover:text-green md:p-0">Projects</a>
              <span className="absolute w-0 h-1 -bottom-1 left-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute w-0 h-1 -bottom-1 right-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="/contact" className="block py-2 pl-3 pr-4 rounded text-off-white hover:text-green md:border-0 md:hover:text-green md:p-0">Contact</a>
              <span className="absolute w-0 h-1 -bottom-1 left-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute w-0 h-1 -bottom-1 right-1/2 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar