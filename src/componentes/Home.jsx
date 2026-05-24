import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Home() {
  const[filmes, setFilmes] = useState([])
  useEffect( () => {
  axios.get('https://6a108877d2a985707036e86d.mockapi.io/Schema')
  .then( res => setFilmes(res.data) )
  .catch( err => console.log(err) );
  }, [])

  return (
      <div className="max-w-3xl mx-auto">
        <h1  className="text-4xl font-bold text-center mb-8">Filmes</h1>

        <div className="grid gap-4">
        {filmes.map((filme) => (
          <div key={filme.id} className="bg-gray-800 border border-purple-600 rounded-xl p-5 shadow-lg hover:scale-[1.02] transition" >
            <Link to={`/read/${filme.id}`} className="flex justify-between" >
              <span>ID: {filme.id}</span>
              <span>NOME: {filme.nome}</span>
            </Link>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Home
