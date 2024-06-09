import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import Historic from "./pages/historic/historic";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/historic" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  )
}
