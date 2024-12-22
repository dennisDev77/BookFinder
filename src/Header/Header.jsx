import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center shadow-sm'>
        {/* Add logotipo book-open */}
        <div className='flex justify-between w-full py-2 px-10 items-center'>

    {/* Colocando a logo */}
      <Link>
        <h1 className=' text-5xl text-color-blue flex items-center justify-center gap-2'> <span><FiBookOpen/></span> <span className='text-4xl text-color-black font-medium'>BookFinder</span></h1>
      </Link>
{/* Fim */}

    <div className='flex justify-between items-center gap-20'>
  {/*  Input search */}
      <div className='border w-64 '>
      <input type="search" placeholder='Procure por: titulo, autor ou ' className='w-full p-1 rounded-full'/>
      </div>

    {/* Mostrando menu Icon */}
      <div>
        <button className='text-3xl'> <LuMenu/></button>
      </div>

      </div>

    </div>
    </header>
  )
}

export default Header
