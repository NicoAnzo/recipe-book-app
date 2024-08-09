import { Link, useParams } from "react-router-dom";

export function RecipeCard (props) {

    const {recipeId} = useParams();

    const recipe = props.recipesToDisplay.find( (recipeObj) => {
        return recipeObj.id == recipeId;
    });
   
    const renderImage = (recipeDetails) => {
        if(recipeDetails.image === undefined) return;

        return (
            < img src = { recipeDetails.image } alt = "Recipe image" />
        )
    }

    return (
        <div className="recipes">
            {props.recipesToDisplay.map((recipeDetails) => { 
                return (
                    <div key={recipeDetails.id} className="recipe-card">
                        
                    { renderImage(recipeDetails) }
    
                        <h3>{recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Servings: {recipeDetails.servings}</p>
                    
                        <p>
                            <button onClick={() => props.callbackToDelete(recipeDetails.id)}>Delete</button>
                        </p>
                        <p>
                            <Link to={`/itemDetails/${recipeDetails.id}`}>More Info</Link>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}