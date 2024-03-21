//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing pages
import Product from './pages/products.js';
import Cart from './pages/cart.js';
import Home from './pages/home.js';

//

import './App.css';

function App() {
  return (
    <div data-testid='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
