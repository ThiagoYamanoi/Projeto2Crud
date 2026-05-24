import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react'
import Home from './componentes/Home';
import Read from './componentes/Read'
import Create from './componentes/Create';
import Update from './componentes/Update';
import Header from './componentes/Header'
import Delete from './componentes/Delete';

function App() {
    return(
   <BrowserRouter>

        <Header/>
        <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/create' element={<Create />}/>
                <Route path='/update' element={<Update />}/>
                <Route path='/read/:id' element={<Read />}/>
                <Route path = '/delete' element = {<Delete/>}/>
            </Routes>
        </div>
   </BrowserRouter>
    )
}   

export default App
