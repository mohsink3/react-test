import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'

import './App.css'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {

  return (
    <>
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </>
  )
}

export default App;
