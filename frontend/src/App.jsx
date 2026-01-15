import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Profil from "./pages/Profil/Profil";
import Classement from "./pages/Classement/Classement";
import Landing from "./pages/Landing/Landing";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Admin from "./pages/Admin/Admin";
import Layout from "./components/Layout/Layout";
import { getAuthToken } from "./api/authStorage";
import { getUserRoleFromToken } from "./utils/jwt";

function App() {
  const location = useLocation();
  const token = getAuthToken();
  const isLoggedIn = Boolean(token);
  const role = getUserRoleFromToken(token);
  const protectedElement = (element) =>
    isLoggedIn ? element : <Navigate to="/" replace />;
  const adminElement = (element) =>
    isLoggedIn && role === "admin" ? element : <Navigate to="/home" replace />;

  return (
    <>
      <Layout>
        <Routes location={location}>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" replace /> : <Landing />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={protectedElement(<Home />)} />
          <Route path="/game" element={protectedElement(<Game />)} />
          <Route path="/classement" element={protectedElement(<Classement />)} />
          <Route path="/profil" element={protectedElement(<Profil />)} />
          <Route path="/admin" element={adminElement(<Admin />)} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
