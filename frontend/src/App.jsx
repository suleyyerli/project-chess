import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Profil from "./pages/Profil/Profil";
import Classement from "./pages/Classement/Classement";
import Landing from "./pages/Landing/Landing";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Layout from "./components/Layout/Layout";
import { getAuthToken } from "./api/authStorage";

function App() {
  const location = useLocation();
  const token = getAuthToken();
  const isLoggedIn = Boolean(token);

  return (
    <>
      <Layout>
        <Routes location={location}>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" replace /> : <Landing />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
