import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Read() { 

  const[data, setDatas] = useState({})
  const{id} = useParams() 
  useEffect( () => {
  axios.get('https://6a108877d2a985707036e86d.mockapi.io/Schema/' + id)
  .then( res => setDatas(res.data) )
  .catch( err => console.log(err) );
  }, [id])


  return (
    <div>
      <div>
        <div><strong>Filme: {data.nome}</strong></div>
        <div> <strong>Gênero: {data.genero}</strong> </div>
        <div> <strong>Ano: {data.ano}</strong>  </div>

      </div>
      <Link to = {'/'}>Cancelar</Link>
    </div>
  )
}

export default Read  
