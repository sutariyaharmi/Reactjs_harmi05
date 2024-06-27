import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_TO_CART , INCRIMENT_TO_CART , DECREMENT_TO_CART } from "../Constant"

export const addToCart = (data) => {
    console.warn('AddToCart' , data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn('RemoveToCart' , data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCard = () => {
    return{
        type:EMPTY_TO_CART
    }
}

export const incrimentToCard = (data) => {
    return{
        type:INCRIMENT_TO_CART,
         data
    }
}

export const decrementToCart = (data) => {
    return{
        type:DECREMENT_TO_CART,
        data
    }
}

