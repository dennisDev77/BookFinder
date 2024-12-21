import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  return (
    <header className='flex items-center'>
        {/* Add logotipo book-open */}
        <div className='flex justify-between w-full'>
      <div>
        <h1 className=' text-4xl text-color-blue'><FiBookOpen/></h1>
      </div>

      <div>
        <input type="search" placeholder='Procure por: titulo, autor ou ' />
      </div>
      <div>
        <button> <IoIosMenu/> <IoClose/></button>
      </div>
      </div>
    </header>
  )
}

export default Header
