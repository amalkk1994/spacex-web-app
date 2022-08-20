import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Launches from "./pages/Launches"
import Missions from "./pages/Missions"
import Ships from "./pages/Ships"
import Container from "./Layouts/Container"

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="missions" element={<Missions />} />
            <Route path="ships" element={<Ships />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
