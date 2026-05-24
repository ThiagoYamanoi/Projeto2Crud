import React from 'react'

function CampoTexto({nome, valor, aoAlterado, Place}) {

  return (
    <div  className="flex flex-col gap-2 mb-4">
        <label className="font-semibold text-purple-300">{nome}</label>
        <input 
        className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 text-white outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder={Place}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        />
    </div>
  )
}

export default CampoTexto
