import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Subscription from "../components/Subscription"
import FooterFeature from "../components/FooterFeature"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscription />
      <FooterFeature/>
      <Footer />
    </>
  )
}

export default RootLayout