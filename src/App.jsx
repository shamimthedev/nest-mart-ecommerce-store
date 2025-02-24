import { Routes, Route } from "react-router"
import About from './pages/About';
import Home from './pages/Home';
import RootLayout from "./layout/RootLayout";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Error from "./pages/Error";

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop2" element={<Shop2 />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
