import { Link } from "react-router-dom";

export function RecipeCard (props) {

    return (
        <div className="recipes">
            
                    <div className="recipe-card">
                        
                        < img src = { props.recipeDetails.image } alt = "Recipe image" />
    
                        <h3>{props.recipeDetails.name}</h3>
                        <p>Calories: {props.recipeDetails.calories}</p>
                        <p>Servings: {props.recipeDetails.servings}</p>
                    
                        <p>
                            <button onClick={() => props.callbackToDelete(props.recipeDetails.id)}>Delete</button>
                        </p>
                        <p>
                            <Link to={`/itemDetails/${props.recipeDetails.id}`}>More Info</Link>
                        </p>
                    </div> 
        </div>   
    );
}
