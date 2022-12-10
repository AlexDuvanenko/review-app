import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Well this is awkward...</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div>
                <Link to='/'>Go back to the home page</Link>
            </div>
        </div>
    )
}