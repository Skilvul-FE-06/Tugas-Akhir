import { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import NavComponent from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import Artikel from "./pages/Artikel";
import DataPengaduan from "./pages/DataPengaduan";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import LoginUser from "./pages/LoginUser";
import Pengaduan from "./pages/Pengaduan";
import Register from "./pages/Register";
import "./index.css";
import Coba from "./pages/CobaLogin";

function App() {
  const location = useLocation();
  const showNavbar = !["/register", "/login", "/coba"].includes(location.pathname);
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      {showNavbar && <NavComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coba" element={<Coba />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/pengaduan" element={isLoggedIn && currentUser.role === "user" ? <Pengaduan /> : <Navigate replace to={"/"} />} />
        <Route path="/data-pengaduan" element={isLoggedIn && currentUser.role === "admin" ? <DataPengaduan /> : <Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
