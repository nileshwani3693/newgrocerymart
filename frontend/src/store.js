import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productDetailsReducer, productReducer,newProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer, 
    newProduct:newProductReducer,
   
});


let initialState={
    cart:{
        cartItems:localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            :[],
    }
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;



