// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/welcome"
import Signup from "./Signup"
import Login from "./Login"
import DashboardOne from "./DashboardWelcome"

function App() {
  return (
    <BrowserRouter> {/* Ensure BrowserRouter is only used here */}
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Welcome screen first */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardOne />} /> {/* Route to Dashboard */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
