import React from 'react'
import styles from './Search.module.css'
import { LiaSearchSolid } from "react-icons/lia";

const Search = () => {
    const wordToSearch=React.useRef()

    function showBooks(){
        console.log(wordToSearch.current.value)
    }

  return (
    <section className='flex justify-center items-center pt-4'>
            <div className={`${styles.inputSearch} w-80 flex items-center relative`}>
            <input type="search" placeholder='Procure titulo, autor ou categoria' className=' w-full transition p-3   px-4 text-sm text-color-black rounded-full bg-color-white' ref={wordToSearch}/>
        
            <button className=' absolute right-2 text-2xl p-2 text-color-black flex justify-center items-center ' onClick={showBooks}>
                <LiaSearchSolid/>
            </button>
            </div>
    </section>
  )
}

export default Search

