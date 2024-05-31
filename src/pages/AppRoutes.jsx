import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Login from "./Login/Login"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}
