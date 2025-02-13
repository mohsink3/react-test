import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'

import './App.css'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
      <RecipeList />
    </>
  )
}

export default App;
