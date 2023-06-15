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
import Footbar from "./components/Footbar";
import Coba from "./pages/CobaLogin";
import "./index.css";

function App() {
  const location = useLocation();
  const show = !["/register", "/login"].includes(location.pathname);
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      {show && <NavComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coba" element={<Coba />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/pengaduan" element={isLoggedIn && currentUser.role === "user" ? <Pengaduan /> : <Navigate replace to={"/login"} state={{ navigateTo: "/pengaduan" }} />} />
        <Route path="/data-pengaduan" element={isLoggedIn && currentUser.role === "admin" ? <DataPengaduan /> : <Navigate replace to={"/login"} />} />
      </Routes>
      {show && <Footbar />}
    </>
  );
}

export default App;
