import { Link } from "react-router-dom";

export function SideBar () {

    return (
        <section className="sidebar">
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/addRecipe">
                <button>Add Recipe</button>
            </Link>
        </section>
    )
}


