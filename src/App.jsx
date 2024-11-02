import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Servicios from "./pages/Servicios/Servicios"
import Home from "./pages/Home/Home"
import Nosotros from "./pages/Nosotros/Nosotros"


const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="nous" element={<Nosotros/>}/>

      <Route path="*" element={<Navigate to={"home"}/>}/>
    </Routes>
    </>
  )
}

export default App