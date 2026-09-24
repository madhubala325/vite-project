import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'

function App() {
  return (
    <div>
      <h1>Hello this is reactjs trial</h1>
      <Routes>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
