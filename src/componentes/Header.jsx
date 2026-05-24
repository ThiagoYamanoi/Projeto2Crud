import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header  className="bg-purple-700 text-white px-8 py-5 flex justify-between items-center shadow-lg">
        <span className="text-2xl font-bold">Catálogo de Filmes</span>
        <ul className="flex gap-6">
            <li>
                <Link className="hover:text-purple-200" to="/">ÍNICIO</Link>
            </li>
            <li>
                <Link className="hover:text-purple-200" to="/create">CRIAR</Link>
            </li>
            <li>
                <Link className="hover:text-purple-200"  to="/update">ALTERAR</Link>
            </li>
            <li>
                <Link className="hover:text-purple-200" to = "/delete">DELETAR</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
