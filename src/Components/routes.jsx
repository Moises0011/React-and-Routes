import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  
  import React from 'react'
  
  import Home from "../pages/home";
  import Contato from "../Pages/Contato";
  import Sobre from "../Pages/Sobre";
  import Usuario from "../Pages/Usuario";
  import Conteudo from "../Pages/Conteudo";
  
  export default function Routers() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Usuario' element={<Usuario />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path="/Conteudo" element={<Conteudo />} />
        </Routes>
      </BrowserRouter>
    )
  }