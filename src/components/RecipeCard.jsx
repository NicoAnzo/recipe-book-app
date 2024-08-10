import { Link } from "react-router-dom";

export function RecipeCard (props) {

    // Add conditional rendering. When a recipe doesn't have an image, show a default image.


    return (
        <div className="recipes">
            
                    <div className="recipe-card">
                        
                        < img src = { props.recipeDetails.image } alt = "Recipe image" />
    
                        <h3>{props.recipeDetails.name}</h3>
                        
                        <p>
                            <button onClick={() => props.callbackToDelete(props.recipeDetails.id)}>Delete</button>
                        </p>
                        <p>
                            <Link to={`/itemDetails/${props.recipeDetails.id}`}>
                                <button>More Info</button>
                            </Link>
                        </p>
                    </div> 
        </div>   
    );
}
