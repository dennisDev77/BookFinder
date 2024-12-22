import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import {menu} from '../Data/Data'
import styles from './Header.module.css'

const Header = () => {
  const [menuState, setMenuState]=React.useState(false)
  return (
    <header className='flex items-center shadow-sm'>
        {/* Add logotipo book-open */}
        <div className='flex justify-between w-full py-2 px-10 items-center'>

    {/* Colocando a logo */}
      <Link>
        <h1 className=' text-5xl text-color-blue flex items-center justify-center gap-2'> <span><FiBookOpen/></span> <span className='text-4xl text-color-black font-medium'>BookFinder</span></h1>
      </Link>
  {/* Fim */}

    <div className='flex justify-between items-center gap-16'>
  {/*  Input search */}
      <div className={`${styles.inputSearch} w-80 flex items-center relative`}>
      <input type="search" placeholder='Procure por: titulo, autor ou genero' className=' w-full transition p-3 px-4 text-sm text-color-black rounded-full'/>

      <button className=' absolute right-2 text-2xl p-2 text-color-gray bg-white'><LiaSearchSolid/></button>
      </div>

    {/* Mostrando menu Icon */}
      <div>
        <button className='text-3xl' onClick={()=>setMenuState(!menuState)}> {menuState ? <IoClose/> : <LuMenu/> }</button>
      </div>
         
         { menuState&& menu.map(menu=>(
         <div className={`${styles.menuWrapper} shadow-md flex flex-col justify-center fixed top-16 right-1 gap-3 p-6`} key={menu.id}>

            <div className=' flex items-center gap-1 text-color-black text-xl'>
              <span className='text-2xl'>{menu.iconMain}</span>
              <span>{menu.title}</span>
            </div>

            {/* Menu list */}
            <div className='menus flex flex-col justify-center text-base gap-1'>
            <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba1}</Link>
            <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba2}</Link>
            <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba3}</Link>
            <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba4}</Link>
            <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba5}</Link>
            </div>

            {/* Btn Favoritos */}
            <Link className=' flex justify-center items-center gap-1 bg-color-blue p-1 px-4 text-color-white rounded-sm'>
              <span className='text-center'>{menu.btn}</span>
              {/* <span className='text-center'>{menu.btnIcon}</span> */}
            </Link>

         </div>
         ))}

         </div>

      </div>
    </header>
  )
}

export default Header
