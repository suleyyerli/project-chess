import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Profil from "./pages/Profil/Profil";
import Classement from "./pages/Classement/Classement";
import Landing from "./pages/Landing/Landing";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
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
