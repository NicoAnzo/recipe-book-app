import { Link } from "react-router-dom";
import defaultImage from "../../images/defaultImage.png"

export function RecipeCard (props) {

    const handleImageError = (e) => {
        e.target.src = defaultImage;
    };

    const isLowCalorie = props.recipeDetails.calories / props.recipeDetails.servings < 200;

    return (
        <div className="recipes">
            
                    <div className="recipe-card">
                        < img 
                            src = { props.recipeDetails.image } 
                            alt = "Recipe image" 
                            onError={handleImageError}
                        />
    
                        <h3>{props.recipeDetails.name}</h3>
                        {isLowCalorie && <span className="low-calorie">Low Calorie</span>}
                        <p>
                            <Link to={`/itemDetails/${props.recipeDetails.id}`}>
                                <button className="more-info-btn">More Info</button>
                            </Link>
                        </p>
                        <p>
                            <button className="delete-btn" onClick={() => props.callbackToDelete(props.recipeDetails.id)}>Delete</button>
                        </p>
                    </div> 
        </div>   
    );
}
