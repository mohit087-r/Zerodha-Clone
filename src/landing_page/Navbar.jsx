import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className='mt-4 pb-5 border-b border-gray-300'>
      <nav class="bg-white  xl:mx-50 md:mx-15 mx-[5%]">
        <div class="flex justify-between">
                <div class="flex shrink-0 items-center">
                  <Link className='cursor-default' to="/"><img class="h-4" src="public/images/logo.svg" alt="logo"/></Link>
                </div>
                <div>

                </div>
                <div class="flex items-center ml-10 hidden md:block">
                  <Link to="/signup" class="font-normal px-5 text-sm text-gray-500 hover:text-[#387ed1]">Signup</Link>
                  <Link to="/about" class="font-normal px-5 text-sm text-gray-500 hover:text-[#387ed1]">About</Link>
                  <Link to="/products" class="font-normal px-5 text-sm text-gray-500 hover:text-[#387ed1]">Products</Link>
                  <Link to="/pricing" class="font-normal px-5 text-sm text-gray-500 hover:text-[#387ed1]">Pricing</Link>
                  <Link to="/support" class="font-normal px-5 text-sm text-gray-500 hover:text-[#387ed1]">Support</Link>
                  <Link to="#" class="font-normal px-5 text-sm "><i class="fa-solid fa-bars"></i></Link>
                </div>

                <button onClick={toggleMenu} class="font-normal px-5  text-center md:hidden"><i class="fa-solid fa-bars"></i></button>
        </div>
              {isOpen && (
                <div className="flex mt-4 md:hidden justify-between">
                  <Link to="/singup" className="font-normal text-sm text-gray-500 hover:text-[#387ed1]">Signup</Link>
                  <Link to="/about" className="font-normal text-sm text-gray-500 hover:text-[#387ed1]">About</Link>
                  <Link to="/products" className="font-normal text-sm text-gray-500 hover:text-[#387ed1]">Products</Link>
                  <Link to="/pricing" className="font-normal text-sm text-gray-500 hover:text-[#387ed1]">Pricing</Link>
                  <Link to="/support" className="font-normal text-sm text-gray-500 hover:text-[#387ed1]">Support</Link>
                </div>
              )}
      </nav>

    </div>
  )
}

export default Navbar
