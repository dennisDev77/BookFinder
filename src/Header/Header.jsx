import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center shadow-sm'>
        {/* Add logotipo book-open */}
        <div className='flex justify-between w-full py-2 px-10 items-center'>

      <Link>
        <h1 className=' text-5xl text-color-blue'><FiBookOpen/></h1>
      </Link>

<div className='flex justify-between items-center gap-20'>
      <div className='border w-64 '>
      <input type="search" placeholder='Procure por: titulo, autor ou ' className='w-full p-1 rounded-full' />
      </div>

      <div>
        <button className='text-2xl'> <IoIosMenu/></button>

      </div>
      </div>
    </div>
    </header>
  )
}

export default Header
