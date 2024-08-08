import { RecipeCard } from "./RecipeCard"

export function RecipesList () {

    return (
        <section className="RecipeList">
            <div> <h1>Recipes List</h1> </div>
            <RecipeCard />
        </section>
    );
}