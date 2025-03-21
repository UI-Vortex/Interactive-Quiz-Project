import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Start from "./components/Start/Start"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
