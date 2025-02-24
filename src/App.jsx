import { Routes, Route } from "react-router"
import About from './pages/About';
import Home from './pages/Home';
import RootLayout from "./layout/RootLayout";
import Shop from "./pages/Shop";

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
