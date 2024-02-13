import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const RecipesPage = lazy(() => import('../pages/recipes'));
const RecipeWritePage = lazy(() => import('../pages/recipes/write'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}></Route>
          <Route
            path='/recipes'
            element={<RecipesPage />}></Route>
          <Route
            path='/recipes/write'
            element={<RecipeWritePage />}></Route>
          <Route path='/recipes/:recipeNo/detail'></Route>
        </Route>
        <Route
          path='*'
          element={<p>Not Found</p>}
        />
      </Routes>
    </Suspense>
  );
}
