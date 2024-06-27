import cartReducer from "./cartRedux/cardReducer"
import productReducer from "./productRedux/productReducer"
// import wishlistReducer from "./wishlistRedux/wishlistReducer"
import { combineReducers } from "redux"

const rootRdeucer = combineReducers({
    cart:cartReducer,
    product:productReducer,
    // wishlist:wishlistReducer
})

export default rootRdeucer
