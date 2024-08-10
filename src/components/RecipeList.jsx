import { RecipeCard } from "./RecipeCard"

export function RecipeList (props) {

    return (
        <section>
            <div className="recipe-list-title"> 
                <h1>List of Recipes</h1> 
            </div>

            <div className="recipe-list">
                {props.recipesToDisplay.map( (recipeDetails) => {
                    return (
                        <RecipeCard 
                            key={recipeDetails.id} 
                            recipeDetails={recipeDetails} 
                            callbackToDelete={props.callbackToDelete}
                        />
                    );
                })}
            </div>
        </section>
    );
}

