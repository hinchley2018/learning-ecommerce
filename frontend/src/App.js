//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing pages
import ProductsPage from './pages/products/products.js';
import Cart from './pages/cart/cart.js';
import Home from './pages/home/home.js';

//

import './App.css';

function App() {
  return (
    <div data-testid='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
