import { Routes, Route } from "react-router"
import About from './pages/About';
import Home from './pages/Home';
import RootLayout from "./layout/RootLayout";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/details" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
