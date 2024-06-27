import { ADD_TO_WHISHLIST , REMOVE_TO_WHISHLIST  , WHISHLIST_TO_CART, EMPTY_WHISHLIST } from "../Constant";

const addToWhishlist = () =>{
    return{
        type:ADD_TO_WHISHLIST
    }
}

const removeToWhishlist = () =>{
    return{
        type:REMOVE_TO_WHISHLIST
    }
}

const emptyToWhishlist = () =>{
    return{
        type:EMPTY_WHISHLIST
    }
}

const whishlistToCart= () =>{
    return{
        type:WHISHLIST_TO_CART
    }
}

export default addToWhishlist