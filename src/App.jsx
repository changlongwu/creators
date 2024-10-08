import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {

  return (

      <div className='App'>
        <Routes>
          <Route path='/' element={<ShowCreators />}/>
          <Route path='/view/:id' element={<ViewCreator />}/>
          <Route path='/edit/:id' element={<EditCreator />}/>
          <Route path='/new' element={<AddCreator />}/>
        </Routes>

      </div>


  )
}

export default App
