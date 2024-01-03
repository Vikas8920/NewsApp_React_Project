import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
   const [category, setCategory] = useState("general")

  return (
    <div>
      <Router>
      <Navbar setCategory={setCategory}/>
      <Routes>
        <Route path="/general" element={<category setCategory={"general"}/>}/>
        <Route path="/technology" element={<category setCategory={"technology"}/>}/>
        <Route path="/business" element={<category setCategory={"business"}/>}/>
        <Route path="/health" element={<category setCategory={"health"}/>}/>
        <Route path="/science" element={<category setCategory={"science"}/>}/>
        <Route path="/sports" element={<category setCategory={"sports"}/>}/>
        <Route path="/entertainment" element={<category setCategory={"entertainment"}/>}/>
      </Routes>
      <NewsBoard category={category}/>
      </Router>
    </div>
  )
}

export default App
