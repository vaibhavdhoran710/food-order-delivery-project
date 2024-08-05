
import Food from './assets/Food.jsx/Food'
import Header from './assets/Food.jsx/Header';
import Body from './assets/Food.jsx/Body1st';
import React from 'react';
import Mainmenu from './assets/Food.jsx/Mainmenu';
import Addres from "./assets/Food.jsx/Addres";
import Review from "./assets/Food.jsx/Review";
import { Routes,Route } from "react-router-dom";
import Cart from './assets/Food.jsx/Cart';
import Product from './assets/Food.jsx/Product';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
 
    return(
   <>
   <Header></Header>
    <Routes>
      
      <Route path='/'  Component={Body} />
      {/* <Route path='/menu'  Component={Product} /> */}
      <Route path='/review'  Component={Review} />
      <Route path='/addres'  Component={Addres} />
      {/* <Route path='/cart' Component={Cart} /> */}
      <Route path="/cart" element={<Cart cartItems={cart} />} />
      <Route
              path="/menu"
              element={<Product onAddToCart={handleAddToCart} Component={Product}/>}
            />
    </Routes>
    </>
  )
 
}

export default App
