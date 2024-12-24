import React from 'react'
import api from '../Services/api'
import {Link} from 'react-router-dom'

const FiccaoCientifica = () => {

    const [books, setBooks]=React.useState([])

   React.useEffect(()=>{
  
    async function showtBooks(){
  
      try{
        const response= await api.get('/romance&key=AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s')
        setBooks(response.data.items)
  
      }catch(err){
        console.log(`Existem um erro ${err}`)
      }

      }
        showtBooks()
  
      },[])
  
      React.useEffect(()=>{
        console.log(books)
      },[books])

  return (
    <div>
      <h2 className='font-medium title pt-10'>Ficcao Cientifica</h2>
      
           <div className='flex justify-start items-start gap-4'>
      
                { books.map(book=>(
      
                  <Link key={book.id} className=' shadow-sm w-56'>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Carregando a capa" className='bookCover'/>
                    {/* <p className='text-center whitespace-nowrap overflow-hidden'>{book.volumeInfo.title}</p> */}
                  </Link>
                ))
                }     
          </div>
    </div>
  )
}

export default FiccaoCientifica
