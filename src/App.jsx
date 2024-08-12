import { Route, Routes } from 'react-router-dom'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { DashboardPage } from './components/DashboardPage'
import { ItemDetailsPage } from './components/ItemDetailsPage'
import { AboutPage } from './components/AboutPage'
import { NotFoundPage } from './components/NotFoundPage'

import RecipeList from "./data/recipes.json"

import './App.css'
import { AddRecipeForm } from './components/AddRecipeForm'
import { EditRecipeForm } from './components/EditRecipeForm';


function App() {

  const [recipesToDisplay, setRecipesToDisplay] = useState(RecipeList)

  const createRecipe = (recipeDetails) => {

    const newId = uuidv4();

    const newRecipe = {
      ...recipeDetails,
      id: newId
    }

    const newList = [newRecipe, ...recipesToDisplay];
    setRecipesToDisplay(newList);

  }

  const updateRecipe = (updatedRecipe) => {
    setRecipesToDisplay(recipesToDisplay.map((recipe) => {
      return recipe.id === updatedRecipe.id ? updatedRecipe : recipe;
    }));    
  };

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
          <SideBar callbackToCreate={createRecipe}/>

          <Routes>
            <Route path="/" element={<DashboardPage recipesToDisplay={recipesToDisplay} callbackToDelete={deleteRecipe}/>} />
            <Route path="/itemDetails/:recipeId" element={<ItemDetailsPage recipesToDisplay={recipesToDisplay} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notFound" element={<NotFoundPage />} />
            <Route path='/addRecipe' element={<AddRecipeForm callbackToCreate={createRecipe}/>} />
            <Route path="/itemDetails/:recipeId/edit" element={<EditRecipeForm recipesToDisplay={recipesToDisplay} callbackToUpdate={updateRecipe}/>} />
          </Routes>

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
