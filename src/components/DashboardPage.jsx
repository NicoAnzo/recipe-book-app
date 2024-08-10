import { RecipeList } from "./RecipeList";

export function DashboardPage (props) {

    return (
        <div>
            <RecipeList recipesToDisplay={props.recipesToDisplay} callbackToDelete={props.callbackToDelete}/>
        </div>
    );
}