import { NavLink } from "react-router-dom";

export function SideBar () {

    return (
        <section className="sidebar">
            <NavLink to="/">
                <button>Home</button>
            </NavLink>

            <NavLink to="/about">
                <button>About</button>
            </NavLink>

            <NavLink to="/addRecipe">
                <button>Add Recipe</button>
            </NavLink>
        </section>
    )
}


