import { Routes, Route } from "react-router-dom";
import { Layout } from "../layouts";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}
