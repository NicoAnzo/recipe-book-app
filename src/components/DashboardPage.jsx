import { RecipeList } from "./RecipeList";

export function DashboardPage (props) {

    return (
        <div>
            <p>This is the Dashboard Page</p>
            <RecipeList recipesToDisplay={props.recipesToDisplay} callbackToDelete={props.callbackToDelete}/>
        </div>
    );
}