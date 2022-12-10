import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import About from './routes/About';
import RecipeListContainer from './routes/RecipeListContainer';
import RecipeDetail from './component/recipe/RecipeDetail';
import ErrorPage from './ErrorPage';

import './style/styles.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},
      {
        path: "about",
        element: <About />
      },
      {
        path: 'recipes',
        element: <RecipeListContainer />,
      },
      {
        path: 'recipes/:recipeId',
        element: <RecipeDetail />
      }
    ],
  },
]);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
