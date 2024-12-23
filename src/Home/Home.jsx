import React from 'react'
import api from '../Services/api'

const Home = () => {
  const [books, setBooks]=React.useState([])

  async function showtBooks(){

    try{
      const response= await api.get('/&key=AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s')
      setBooks(response.data)
      console.log(books)

    }catch(err){
      console.log(`Existem um erro ${err}`)
    }
   }

   React.useEffect(()=>{

      showtBooks()

   },[])
  return (

    <section>

      <div className='flex justify-center pt-20 flex-col gap-2'>
        <h2 className='text-color-black text-5xl font-medium text-center'>Você Acobou De Encontrar os Melhores 
          <span className='text-color-blue'>Books</span> Que <span className='text-color-blue'>Procura</span>
        </h2>

        <p className='text-center'>O lugar perfeito para os amantes de leitura que desejam se perder em histórias incríveis. Descubra um vasto acervo de livros que vão desde romances apaixonantes a aventuras eletrizantes, passando por dramas emocionantes e mistérios intrigantes. Navegue facilmente pelas categorias, encontre os títulos que mais combinam com você e explore novos mundos sem sair do lugar.
        </p>
      </div>

      <div >

        {books?
         
          <div className='livros'>
            <h2 className='text-center'>Temos cerca de {books.totalItems} livros </h2>
              {books.kind}

            </div>
        :
          <h1>Carregando Capas</h1>
        }

      </div>
    </section>
  )
}

export default Home
