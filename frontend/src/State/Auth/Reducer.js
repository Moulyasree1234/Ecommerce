import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_REQUEST,LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAILURE,LOGOUT } from "./ActionType";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,  // ✅ Ensure jwt is always defined
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_REQUEST":
        case "LOGIN_REQUEST":
            return { ...state, isLoading: true, error: null };

        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return { ...state, isLoading: false, error: null, jwt: action.payload };

        case "GET_USER_SUCCESS":
            return { ...state, isLoading: false, user: action.payload };

        case "REGISTER_FAILURE":
        case "LOGIN_FAILURE":
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
