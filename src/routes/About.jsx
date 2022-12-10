import { useEffect } from "react";
import { APP_TITLE_PREFIX } from "../index";

export default function About() {
    useEffect(() => {
        document.title = `${APP_TITLE_PREFIX} - About`;
    }, []);

    return ( 
        <div>
            <h1>About</h1>
        </div>
    );
}