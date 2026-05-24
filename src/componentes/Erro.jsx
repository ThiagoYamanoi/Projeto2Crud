import React from 'react'
import { Link } from 'react-router-dom';

function Erro() {
  return (
    <div>
      <h1>Erro, esse Id não existe</h1>
      <div>
        <Link to="/">Clique aqui para voltar ao início</Link>
      </div>
    </div>
  )
}

export default Erro
