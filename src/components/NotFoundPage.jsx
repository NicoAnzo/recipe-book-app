import { Link } from "react-router-dom";

export function NotFoundPage () {
    
    return (
        <section className="notFoundPage">
            <div>
                <h1>Page Not Found</h1>
            </div>
            <div>
                <h4>Looks like you've followed a broken link or entered a URL that doesn't exist on this website.</h4>
            </div>
            <div>
                <Link to='/'>
                  <p>Back to our website</p>
                </Link>
            </div>
        </section>
    );
}