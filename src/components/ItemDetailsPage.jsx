import { Link, useParams } from "react-router-dom";

export function ItemDetailsPage(props) {

  const {recipeId} = useParams();

  const recipe = props.recipesToDisplay.find((recipeObj) => {
    return recipeObj.id == recipeId;
  });

  return (
    <>
      <div>
        <p>This is the Item Details Page</p>
      </div>
      <div className="recipeDetails">
        <img src={recipe.image} alt="recipe image" />
        <h3>{recipe.name}</h3>
        <h2>{recipe.calories}</h2>
        <p>{recipe.servings}</p>

        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    </>
  );
}
