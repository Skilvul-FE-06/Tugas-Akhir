import { Route, Routes } from "react-router-dom"
import Kategori from "./pages/Kategori"
import Organik from "./pages/Organik"
import Anorganik from "./pages/Anorganik"
import B3 from "./pages/B3"
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/kategori" element={<Kategori/>} />
        <Route path="/kategori/organik" element={<Organik/>} />
        <Route path="/kategori/anorganik" element={<Anorganik/>} />
        <Route path="/kategori/b3" element={<B3/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
