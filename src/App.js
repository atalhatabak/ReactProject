import logo from './logo.svg';
import './App.css';
import './Libs/style.css';
import './Libs/menu.css';
import './Libs/navbar.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from './pages/about';
import Main from './pages/main';
import Products from './pages/products';
import Contact from './pages/contact';
import Product from './pages/product';


function App() {

  return (

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/product" element={<Products />} />
    <Route path="*" element={<Main />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
