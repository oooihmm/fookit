import { Routes, Route } from "react-router-dom";
import { Layout } from "../layouts";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/recipes"></Route>
        <Route path="/recipes/write"></Route>
        <Route path="/recipes/:recipeNo/detail"></Route>
        <Route path="/community"></Route>
        <Route path="/community/write"></Route>
        <Route path="/community/:recipeNo/detail"></Route>
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/mypage" />
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}
