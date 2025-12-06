import Footer from "@/components/Footer"
import Navbar from "@/components/navbar/navbar"
import { Outlet } from "react-router"


function FrontLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default FrontLayout