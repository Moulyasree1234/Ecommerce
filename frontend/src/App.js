import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './customer/Routers/CustomerRouters.jsx';


function App() {
  return (
    <div className="">
      <Routes>
            <Route path='/*' element={<CustomerRouters/>}></Route>

       </Routes>

      <div>
        {/* Uncomment this to render the Homepage */}
        {/* <Homepage /> */}
        {/*<Product />*/}
       {/* <ProductDetails/> */}
       {/* <Cart/> */}
       {/* <Checkout/> */}
       {/* <Order/> */}
       {/* <OrderDetails/> */}
      </div>
    
    </div>
  );
}

export default App;

