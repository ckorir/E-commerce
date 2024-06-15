// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCartegory from './pages/ShopCartegory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import LoginSingup from './pages/LoginSingup';

function App() {
  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
          <Navbar/>
          <Routes>

            <Route path="/" element={<Shop/>} />
            <Route path="/mens" element={<ShopCartegory cartegory="men"/>} />
            <Route path="/womens" element={<ShopCartegory cartegory="women"/>} />
            <Route path="/kids" element={<ShopCartegory cartegory="kids"/>} />
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>} />
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSingup/>} />

          </Routes>
        </BrowserRouter>
        
        
        
    </div>
  );
}

export default App;
