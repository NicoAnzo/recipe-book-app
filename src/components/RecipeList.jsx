import { RecipeCard } from "./RecipeCard"

export function RecipeList (props) {

    return (
        <section className="RecipeList">
            <div> <h1>List of Recipes</h1> </div>
            <RecipeCard recipesToDisplay={props.recipesToDisplay} callbackToDelete={props.callbackToDelete}/>
        </section>
    );
}