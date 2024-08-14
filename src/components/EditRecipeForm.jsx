import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function EditRecipeForm({ recipesToDisplay, callbackToUpdate }) {
  const { recipeId } = useParams(); 
  const navigate = useNavigate();

  const recipe = recipesToDisplay.find((recipeObj) => recipeObj.id === recipeId);

  const [name, setName] = useState(recipe ? recipe.name : '');
  const [image, setImage] = useState(recipe ? recipe.image : '');
  const [calories, setCalories] = useState(recipe ? recipe.calories : '');
  const [servings, setServings] = useState(recipe ? recipe.servings : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...recipe, 
      name: name.trim(),
      image: image.trim(),
      calories: parseInt(calories, 10),
      servings: parseInt(servings, 10)
    };

    callbackToUpdate(updatedRecipe);

    navigate(`/itemDetails/${recipeId}`);
  };

  return (
    <section className="AddRecipeForm">
      <div className="add-recipe-div">
        <h2>Edit Recipe:</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Image URL:
            <input
              type="url"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            Calories:
            <input
              type="number"
              name="calories"
              min={100}
              max={5000}
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>

          <label>
            Servings:
            <input
              type="number"
              name="servings"
              min={1}
              max={10}
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </label>

          <p>
            <button type="submit">Update</button>
            <button type="button" onClick={() => navigate(`/itemDetails/${recipeId}`)}>Cancel</button>
          </p>
      </form>
      </div>
    </section>
  );
}