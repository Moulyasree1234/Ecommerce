import { configureStore } from "redux";
import { authReducer } from "./Auth/Reducer";
import CustomerProductReducer from "./Product/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

export const store =configureStore({
    reducer: {
        auth: authReducer,
        products:CustomerProductReducer,
        cart:cartReducer,
        order:orderReducer,
    }
})