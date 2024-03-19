//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing pages
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Checkout from "./pages/checkout.js";
//
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
