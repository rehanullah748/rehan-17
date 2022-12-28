import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"
import ShopStoreProvider from "./store/ShopStore";
function App() {
  return(
    <NextUIProvider>
    <ShopStoreProvider>
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </ShopStoreProvider>
    </NextUIProvider>
  )
}

export default App
