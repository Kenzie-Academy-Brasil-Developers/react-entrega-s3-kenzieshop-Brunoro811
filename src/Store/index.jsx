import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Modules/Cart/recuders";

const reducers = combineReducers({ cart: cartReducer });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
