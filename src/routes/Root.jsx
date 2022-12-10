import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <nav style={{ margin: 10 }}>
                <Link to='/' style={{ padding: 5 }}>Home</Link>
                <Link to='about' style={{ padding: 5 }}>About</Link>
                <Link to='recipes' style={{ padding: 5 }}>Recipes</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}