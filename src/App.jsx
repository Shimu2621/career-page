import { Route, Routes } from "react-router-dom"
import Developer from "./components/Developer"
import JobList from "./components/JobList"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Developer></Developer>}></Route>
      <Route path="/user/:id" element={<JobList></JobList>}></Route>
    </Routes>
  )
}

export default App
