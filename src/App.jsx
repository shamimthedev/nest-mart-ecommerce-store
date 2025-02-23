import { Routes, Route } from "react-router"
import About from './pages/About';
import Home from './pages/Home';
import RootLayout from "./layout/RootLayout";

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
