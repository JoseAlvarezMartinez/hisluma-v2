import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Servicios from "./pages/Servicios/Servicios"
import Nosotros from "./pages/Nosotros/Nosotros"


const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="services" element={<Nosotros/>}/>

      <Route path="*" element={<Navigate to={"services"}/>}/>
    </Routes>
    </>
  )
}

export default App