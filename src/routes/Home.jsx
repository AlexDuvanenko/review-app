import { useEffect } from "react";
import { APP_TITLE_PREFIX } from "../index";

export default function Home() {
    useEffect(() => {
        document.title = `${APP_TITLE_PREFIX} - Home`;
    }, []);
    
    return ( 
        <div>
            <h1>Home</h1>
        </div>
    );
}