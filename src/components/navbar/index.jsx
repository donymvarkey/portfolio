
const Navbar = () => {
  return (
    <div className='max-w-screen-6xl p-4'>
      <div className='flex items-center justify-between'>
        <a href="/">
          <div className='flex text-4xl text-off-white'>
            <p className='me-2 font-bold'>Dony</p><span className='font-light'>M Varkey</span>
          </div>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li className="relative group">
              <a href="/projects" className="block py-2 pl-3 pr-4 text-off-white rounded hover:text-green md:border-0 transition-all ease-in md:hover:text-green md:p-0">About</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="/projects" className="block py-2 pl-3 pr-4 text-off-white rounded hover:text-green md:border-0 md:hover:text-green md:p-0">Projects</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li className="relative group">
              <a href="/contact" className="block py-2 pl-3 pr-4 text-off-white rounded hover:text-green  md:border-0 md:hover:text-green md:p-0">Contact</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-green group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar