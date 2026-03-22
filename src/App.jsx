//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
