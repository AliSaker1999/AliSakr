import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateRecipe from "../pages/CreateRecipe";
import ProtectedRoute from "./ProtectedRoute"; // assume you already have it

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateRecipe />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
