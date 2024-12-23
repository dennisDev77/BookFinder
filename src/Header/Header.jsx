import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import {menu} from '../Data/Data'
import styles from './Header.module.css'
import api from '../Services/api';

const Header = () => {
  const [menuState, setMenuState]=React.useState(false)
  const [search, setSearch]=React.useState([])

  const searchBook=React.useRef()

 async  function handleClick(){
    const inputSearch=searchBook.current.value

    try{
       const response= await api.get(`/${inputSearch}&key=AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s`)
       setSearch(response.data.items)
       search.map(book=>(

         console.log(book.volumeInfo.imageLinks.smallThumbnail)
       ))

    }catch(err){
      console.log(err)
    }
  }

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
      <input type="search" placeholder='Procure por: titulo, autor ou genero' className=' w-full transition p-3   px-4 text-sm text-color-black rounded-full bg-color-white' ref={searchBook}/>

      <button className=' absolute right-2 text-2xl p-2 text-color-black bg-color-white' onClick={handleClick}>
        <LiaSearchSolid/>
      </button>
      </div>

     {/* Mostrando menu Icon */}
      <div>
        <button className='text-3xl' onClick={()=>setMenuState(!menuState)}> {menuState ? <IoClose/> : <LuMenu/> }</button>
      </div>
         
       {menuState &&
        <div className={`${styles.menuWrapper} shadow-md flex flex-col justify-center fixed top-16 right-1 gap-3 p-6`}>

          <div className=' flex items-center gap-1 text-color-black text-xl'>
            <span className='text-2xl'><TbCategoryFilled/></span>
            <span>Categorias</span>
          </div>

          {/* Menu list */}

        { menu.map(menu=>(
          <div className='menus flex flex-col justify-center text-base gap-1'  key={menu.id}>
          <Link className={`${styles.abaMenu} shadow-sm text-color-gray`}>{menu.aba}</Link>
          </div>

      ))}
          {/* Btn Favoritos */}
          <Link className=' flex justify-center items-center gap-1 bg-color-blue p-1 px-4 text-color-white rounded-sm'>
            <span className='text-center'>Meus Favoritos</span>
            {/* <span className='text-center'>{menu.btnIcon}</span> */}
          </Link>

        </div>}

    </div>

    </div>

    {/* {
      search &&
      <div key={book.volumeInfo.title}>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Carregando Foto" />
      </div>
    } */}
    </header>
  )
}

export default Header
