import { RecipeList } from "./RecipeList";

export function DashboardPage (props) {

    return (
        <div className="recipe-page">
            <RecipeList recipesToDisplay={props.recipesToDisplay} callbackToDelete={props.callbackToDelete}/>
        </div>
    );
}