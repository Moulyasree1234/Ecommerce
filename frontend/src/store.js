import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./State/Auth/Reducer";
import CustomerProductReducer from "./State/Product/Reducer";
import cartReducer from "./State/Cart/Reducer";
// import { orderReducer } from "./State/Order/Reducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customersProduct:CustomerProductReducer,
        cart:cartReducer,
        // order:orderReducer,
    }
})