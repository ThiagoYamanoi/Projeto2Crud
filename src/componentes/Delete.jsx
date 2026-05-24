import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import CampoTexto from './CampoTexto'
import Erro from './Erro'

function Delete() {
  const [id, setId] = useState('')
  const [erro, setErro] = useState(false)
  const navigate = useNavigate()

  const handleDelete = () => {
    axios.delete('https://6a108877d2a985707036e86d.mockapi.io/Schema/' + id)
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        setErro(true)
      })
  }

  return (
    <div>
      <h1>Deletar Filme</h1>

      <CampoTexto
        nome="Deletar"
        valor={id}
        aoAlterado={valor => setId(valor)}
        Place="Digite o ID do filme"
      />

      <button  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md" onClick={handleDelete}>Deletar</button>

      {erro && <Erro />}

      <button  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md" onclick={()=>{navigate('/')}}>Voltar para o início</button>
    </div>

  )
}

export default Delete