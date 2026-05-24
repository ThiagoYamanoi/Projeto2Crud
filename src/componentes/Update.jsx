import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CampoTexto from './CampoTexto'
import Change from './Change'
import Erro from './Erro'


function Update() {
  const [id, setId] = useState('')
  const [data, setData] = useState([])
   const [mostrar, setMostrar] = useState(false)


    useEffect(() =>{
    axios.get('https://6a108877d2a985707036e86d.mockapi.io/Schema')
    .then( res => setData(res.data) )
    .catch( err => console.log(err) );
    }, [])

    const alterar = () => {
    setMostrar(true)
  }

  return (
    <div>
      <div>
        <h1>Alterar Filme</h1>
        <CampoTexto
          nome = 'Alterar'
          valor = {id}
          aoAlterado={valor => setId(valor)}
          Place="Digite o iD DO filme"
      />
      </div>
      <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md" onClick={alterar}>Alterar </button>
          

        {mostrar && (
        data.some(item => item.id === id)
          ? <Change id={id} />
          : <Erro />
      )}
      </div>
    </div>
  )
}

export default Update 

