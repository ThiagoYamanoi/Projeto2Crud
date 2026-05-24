import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import CampoTexto from './CampoTexto';

function Create() {
    const [values, setValues] = useState({
      nome: '',
      genero: '',
      ano: ''
    }) 

    const navigate = useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('https://6a108877d2a985707036e86d.mockapi.io/Schema', values)
        .then(res =>{
          console.log(res)
          navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
    
    <form onSubmit = {handleSubmit}>
    <div>

      <div>
        <h1>Adicionar Usuário</h1>
      </div> 
      <CampoTexto 
      nome = "Nome"
      valor = {values.nome}
      aoAlterado = {valor => setValues({...values, nome: valor})}
      Place = "Digite o nome do filme"
      />
      <CampoTexto
      nome = "Gênero"
      valor = {values.genero}
      aoAlterado={valor => setValues({...values, genero: valor})}
      Place = "Digite o gênero do filme"
      />

      <CampoTexto
      nome = "ano"
      valor = {values.ano}
      aoAlterado={valor => setValues({...values, ano: valor})}
      Place = "Digite o ano do filme"
      />

      <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md" >enviar</button>
      <Link to = "/"> Voltar </Link>


    </div>
    </form>
    )
}

export default Create
