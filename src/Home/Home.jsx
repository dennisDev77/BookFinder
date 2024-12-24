import React from 'react'
import styles from './Home.module.css'
import api from '../Services/api'
import Loading from '../Helper/Loading'
// import {gsap} from 'gsap'

const Home = () => {

  // Insert the Variable
  const [books, setBooks]=React.useState([])
  const [loading, setLoading]=React.useState(true)
  const headline=React.useRef()


  React.useEffect(()=>{

  async function showtBooks(){

    try{
      const response= await api.get('/&key=AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s')
      setBooks(response.data)
      setLoading(false)

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

      <div className='flex justify-center pt-20 flex-col gap-2'>

        <h2 className='text-color-black text-5xl font-medium text-center'>Você Acobou De Encontrar os Melhores 
          <span className='text-color-blue'>Books</span> Que <span className='text-color-blue'>Procura</span>
        </h2>

        <p className='text-center'>O lugar perfeito para os amantes de leitura que desejam se perder em histórias incríveis. Descubra um vasto acervo de livros que vão desde romances apaixonantes a aventuras eletrizantes, passando por dramas emocionantes e mistérios intrigantes. Navegue facilmente pelas categorias, encontre os títulos que mais combinam com você e explore novos mundos sem sair do lugar.
        </p>
      </div>

      <div className='books'>
      {loading ?
        <Loading/>
        :

        <div>
          <h2>Explore cada livros que temos para si</h2>
        </div>
      }
      </div>
    </section>
  )
}

export default Home
