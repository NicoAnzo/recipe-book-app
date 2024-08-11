import { Link } from "react-router-dom";
import defaultImage from "../../images/defaultImage.png"

export function RecipeCard (props) {

    const handleImageError = (e) => {
        e.target.src = defaultImage;
    };

    return (
        <div className="recipes">
            
                    <div className="recipe-card">
                        
                        < img 
                            src = { props.recipeDetails.image } 
                            alt = "Recipe image" 
                            onError={handleImageError}
                        />
    
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
