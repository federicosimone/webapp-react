//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MoviesList from "../pages/MoviesList";
import DefaultLayout from "../layout/DefaultLayout";

import './App.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Homepage} />
            <Route path='/movies' Component={MoviesList} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
