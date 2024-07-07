import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCartegory from './pages/ShopCartegory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import LoginSingup from './pages/LoginSingup';
import Footer from './components/footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar/>
          <Routes>

            <Route path="/" element={<Shop/>} />
            <Route path="/mens" element={<ShopCartegory banner={men_banner} cartegory="men"/>} />
            <Route path="/womens" element={<ShopCartegory banner={women_banner} cartegory="women"/>} />
            <Route path="/kids" element={<ShopCartegory banner={kids_banner} cartegory="kids"/>} />
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>} />
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSingup/>} />

          </Routes>
          <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
