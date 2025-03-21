import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Start from "./components/Start/Start"
import Tests from "./components/Tests/Tests"
import Final from "./components/Finals/Final"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/direct-test" element={<Tests />} />
          <Route path="/results" element={<Final />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
