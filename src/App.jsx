import { Route, Routes } from 'react-router-dom'
import { useState } from "react"

import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { DashboardPage } from './components/DashboardPage'
import { ItemDetailsPage } from './components/ItemDetailsPage'
import { AboutPage } from './components/AboutPage'
import { NotFoundPage } from './components/NotFoundPage'

import RecipeList from "./data/recipes.json"

import './App.css'


function App() {

  const [recipesToDisplay, setRecipesToDisplay] = useState(RecipeList)

  const deleteRecipe = (recipeId) => {
    
    const newList = recipesToDisplay.filter((recipe) => {
      return recipe.id !== recipeId;
    });

    setRecipesToDisplay(newList);
  }  

  return (
    <>
      <div id="container">
        <NavBar />
       
        <main id="main">
          <SideBar />

          <Routes>
            <Route path="/" element={<DashboardPage recipesToDisplay={recipesToDisplay} callbackToDelete={deleteRecipe}/>} />
            <Route path="/itemDetails/:recipeId" element={<ItemDetailsPage recipesToDisplay={recipesToDisplay}/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notFound" element={<NotFoundPage />} />
          </Routes>

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
