import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Nous from "./pages/Nous/Nous"
import Services from "./pages/Services/Services"


const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="nous" element={<Nous/>}/>
      <Route path="services" element={<Services/>}/>

      <Route path="*" element={<Navigate to={"home"}/>}/>
    </Routes>
    </>
  )
}

export default App