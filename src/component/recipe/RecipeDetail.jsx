import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APP_TITLE_PREFIX } from '../../index';

export default function RecipeDetail() {
    const { recipeId } = useParams();

    useEffect(() => {
        document.title = `${APP_TITLE_PREFIX} - ${recipeId ? recipeId : 'Recipes'}`;
    }, [recipeId]);
    return (
        <>
            <h2>Recipe: {recipeId}</h2>
        </>
    );
}