import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
