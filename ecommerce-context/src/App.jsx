import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShopStoreProvider from "./store/ShopStore";
function App() {
  return(
    <ShopStoreProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </ShopStoreProvider>
  )
}

export default App
