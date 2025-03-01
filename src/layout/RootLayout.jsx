import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Subscription from "../components/Subscription"
import FooterFeature from "../components/FooterFeature"
import BackToTop from "../components/BackToTop"

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <footer>
        <Subscription />
        <FooterFeature />
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout;