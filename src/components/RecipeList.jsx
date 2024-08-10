import { RecipeCard } from "./RecipeCard"

export function RecipeList (props) {

    return (
        <section className="RecipeList">
            <div> <h1>List of Recipes</h1> </div>

            {props.recipesToDisplay.map( (recipeDetails) => {
                return (
                    <RecipeCard 
                        key={recipeDetails.id} 
                        recipeDetails={recipeDetails} 
                        callbackToDelete={props.callbackToDelete}
                    />
                );
            })}
        </section>
    );
}

