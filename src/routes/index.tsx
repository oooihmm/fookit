import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const RecipesPage = lazy(() => import('../pages/recipes'));
const RecipeDetailPage = lazy(() => import('../pages/recipes/detail'));
const RecipeWritePage = lazy(() => import('../pages/recipes/write'));
const CommunityPage = lazy(() => import('../pages/community'));
const CommunityDetailPage = lazy(() => import('../pages/community/detail'));
const CommunityWritePage = lazy(() => import('../pages/community/write'));
const Login = lazy(() => import('../pages/Login'));
const Mypage = lazy(() => import('../pages/Mypage'));
const SignUp = lazy(() => import('../pages/Signup'));
const ProfileEdit = lazy(() => import('../pages/ProfileEdit'));

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
          <Route
            path='/recipes/:recipeNo/detail'
            element={<RecipeDetailPage />}></Route>
          <Route
            path='/community'
            element={<CommunityPage />}></Route>
          <Route
            path='/community/write'
            element={<CommunityWritePage />}></Route>
          <Route
            path='/community/:recipeNo/detail'
            element={<CommunityDetailPage />}></Route>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<SignUp />}
          />
          <Route
            path='/mypage'
            element={<Mypage />}
          />
          <Route
            path='/mypage'
            element={<Mypage />}
          />
          <Route
            path='/profileEdit'
            element={<ProfileEdit />}
          />
        </Route>
        <Route
          path='*'
          element={<p>Not Found</p>}
        />
      </Routes>
    </Suspense>
  );
}
