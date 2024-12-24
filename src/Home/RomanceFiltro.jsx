import React from 'react'
import api from '../Services/api'
import {Link} from 'react-router-dom'

const RomanceFiltro = () => {
const [books, setBooks]=React.useState([])

   React.useEffect(()=>{
  
    async function showtBooks(){
  
      try{
        const response= await api.get('/subject:romance&key=AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s')
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
    <section>
      <h2>Romance</h2>
    <div className='flex justify-start'>

          { books.map(book=>(

            <Link key={book.id} className=''>
              <p> Titulo: {book.volumeInfo.title}</p>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Carregando a capa"/>
            </Link>
          ))
          }     
    </div>
    </section>
  )
}

export default RomanceFiltro
