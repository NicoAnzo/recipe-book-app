import { Link } from "react-router-dom";

export function SideBar () {
    return (
        <section className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </section>
    )
}