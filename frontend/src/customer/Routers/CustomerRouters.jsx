import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Pages/Homepage/Homepage';
import Cart from '../components/Cart/Cart';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import CheckOut from '../components/CheckOut/Checkout';
import Order from '../components/Order/Order';
import OrderDetails from '../components/Order/OrderDetails';

const CustomerRouters = () => {
  return (
    <div>
      {/* Navigation should be outside Routes */}
      <Navigation />

      {/* Wrap all Routes inside a single Routes component */}
      <Routes>
        <Route path='/login' element={<Homepage/>}></Route>
        <Route path='/register' element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>

      {/* Footer should be outside Routes */}
      <Footer />
    </div>
  );
};

export default CustomerRouters;
