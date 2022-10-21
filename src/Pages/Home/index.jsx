import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>

      <h1>Página Inicial</h1>

      <Link to="/sobre">
      Sobre
      </Link>

      <br />

      <Link to="/usuario">
      Usuário
      </Link>

      <br />

      <Link to="/conteudo">
      Conteúdo
      </Link>

      <br />

      <Link to="/contato">
      Contato
      </Link>

  </div>
  )
}