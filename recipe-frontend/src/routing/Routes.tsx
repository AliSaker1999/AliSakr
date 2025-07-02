import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateRecipe from "../pages/CreateRecipe";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateRecipe />} />
    </Routes>
  );
};

export default AppRoutes;
