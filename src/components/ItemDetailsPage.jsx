import { Link, useParams } from "react-router-dom";
import defaultImage from "../../images/defaultImage.png"

export function ItemDetailsPage(props) {

  const {recipeId} = useParams();

  const recipe = props.recipesToDisplay.find((recipeObj) => {
    return recipeObj.id === recipeId;
  });

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  

  return (
    <>
      <div className="recipe-details-box">

        <div>
          <h1>{recipe.name}</h1>
        </div>

        <div className="recipe-details-description">

          <div>
           <img src={recipe.image} 
           alt="recipe image"
           onError={handleImageError} 
           />
          </div>

          <div>
            <h4>Calories: {recipe.calories}</h4>
            <p>Servings: {recipe.servings}</p>
          </div>
         
        </div>

        <p>
          <Link to="/">Back</Link>
        </p>

      </div>
    </>
  );
}
