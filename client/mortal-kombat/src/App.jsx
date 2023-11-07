import { BrowserRouter, Routes, Route } from "react-router-dom"
import {HomePage} from "../src/pages/HomePage"
import { NotFound } from './pages/NotFound'
import { ManejadorPersonajes } from './pages/Personajes'
import { Luchador } from './pages/Luchador'
import { UpdatePage } from './pages/UpdatePage'
import { Menu } from "./components/navbar/Nav"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/Registro"

function App() {
  return (
      <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/personajes" element={<ManejadorPersonajes/>}/>
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
            <Route path="/:id/:nombre" element={<Luchador/>}/>
            <Route path="update/:id" element={<UpdatePage/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  )
}


export default App
