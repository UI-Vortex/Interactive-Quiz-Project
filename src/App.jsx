import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Start from "./components/Start/Start"
import Tests from "./components/Tests/Tests"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/direct-test" element={<Tests />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
