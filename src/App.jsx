import React from 'react'
import './App.css'
import Header from './Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

function App() {
  return (
    <>
         <section>

          <BrowserRouter>
          <Header/>

          <main className='container'>
           <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>  

          </main>
          </BrowserRouter>
        </section>
    </>
  )
}

export default App
