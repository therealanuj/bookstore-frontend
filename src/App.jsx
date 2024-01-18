import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import "./App.css"
import MyFooter from "./components/MyFooter"
function App() {


  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  )
}

export default App
