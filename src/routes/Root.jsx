import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="sticky top-0 p-4 bg-gray-200">
                <Link to='/' className="px-2">Home</Link>
                <Link to='about' className="px-2">About</Link>
                <Link to='recipes' className="px-2">Recipes</Link>
            </nav>
            <div className="p-4">
                <Outlet />
            </div>
        </>
    );
}