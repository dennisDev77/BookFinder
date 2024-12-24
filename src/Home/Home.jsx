import React from 'react'
import RomanceFiltro from './RomanceFiltro'
// import {gsap} from 'gsap'

const Home = () => {

  // Insert the Variable
  const headline=React.useRef()


    return (

    <section>

      <div className='flex justify-center pt-20 flex-col gap-2'>

        <h2 className='text-color-black text-5xl font-medium text-center'>Você Acobou De Encontrar os Melhores 
          <span className='text-color-blue'>Books</span> Que <span className='text-color-blue'>Procura</span>
        </h2>

        <p className='text-center text-sm'>O lugar perfeito para os amantes de leitura que desejam se perder em histórias incríveis. Descubra um vasto acervo de livros que vão desde romances apaixonantes a aventuras eletrizantes, passando por dramas emocionantes e mistérios intrigantes. Navegue facilmente pelas categorias, encontre os títulos que mais combinam com você e explore novos mundos sem sair do lugar.
        </p>
      </div>

      <div className='books'>

        <div>
          <RomanceFiltro/>
        </div>

      </div>
    </section>
  )
}

export default Home
