import recipes from "../data/recipes.json"
import { useState } from "react"

export function RecipeCard () {

    const [currRecipes, setCurrRecipes] = useState(recipes)

    const deleteRecipe = recipeId => {
        setCurrRecipes(currRecipes.filter(recipe => recipe.id !== recipeId))
    }

    const renderImage = (recipeDetails) => {
        if(recipeDetails.image === undefined) return;

        return (
            < img src = { recipeDetails.image } alt = "Recipe image" />
        )
}

    return (
        <div className="recipes">
            {currRecipes.map((recipeDetails) => { 
                return (
                    <div key={recipeDetails.id} className="recipe-card">
                        
                    { renderImage(recipeDetails) }
    
                        <h3>{recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Servings: {recipeDetails.servings}</p>
                    
                        <p>
                            <button onClick={() => deleteRecipe(recipeDetails.id)}>Delete</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}