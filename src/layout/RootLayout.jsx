import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Subscription from "../components/Subscription"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscription />
      <Footer />
    </>
  )
}

export default RootLayout