import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { Suspense, lazy } from 'react';

const RecipesPage = lazy(() => import('../pages/recipes'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path='/recipes'
            element={<RecipesPage />}></Route>
        </Route>
        <Route
          path='*'
          element={<p>Not Found</p>}
        />
      </Routes>
    </Suspense>
  );
}
