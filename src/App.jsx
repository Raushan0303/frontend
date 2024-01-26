import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./style/input.css"
import Home from "./pages/Home"
import Scheduel from "./pages/Scheduel"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/scheduel" element={<Scheduel/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App