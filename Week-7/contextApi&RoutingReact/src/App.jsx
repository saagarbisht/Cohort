import {BrowserRouter, Routes, Route} from "react-router-dom"
import Headder from "./components/Headder"
import React, {Suspense} from "react"
const Landing = React.lazy(() => import("./components/Landing"))
const Dashbord = React.lazy(() => import("./components/Dashbord"))

function App() {
  return (
    <>
      <BrowserRouter>
      <Headder/>
        <Routes>
          <Route path="/home" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashbord/></Suspense>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
