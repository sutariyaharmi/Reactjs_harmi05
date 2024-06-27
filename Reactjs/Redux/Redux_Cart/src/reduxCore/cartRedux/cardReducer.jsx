import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART, INCRIMENT_TO_CART, DECREMENT_TO_CART } from "../Constant";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}


const cardReducer = (data = getCartDataFromLocalStorage(), action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn('AddToCartReducer', action);

            const existingProduct = data.findIndex(item => item.id === action.data.id)
            let updatedCartData;

            if (existingProduct >= 0) {

                updatedCartData = data.map((item) => item.id === action.data.id ? { ...item, quantitiy: item.quantitiy += 1 } : item)
                localStorage.setItem('cart', JSON.stringify(updatedCartData))
            }
            else {
                updatedCartData = [{ ...action.data, quantitiy: 1 }, ...data]
            }

            localStorage.setItem('cart', JSON.stringify(updatedCartData))

            return updatedCartData




        case REMOVE_TO_CART:

            console.warn('RemoveToCartReducer', action);
            // data.length = data.length-1
            // data.length = data.length ? data.length -1 : []
            const reminderItem = data.filter((item) => item.id !== action.data)

            localStorage.setItem('cart', JSON.stringify(reminderItem))

            return reminderItem


        case EMPTY_TO_CART:
            console.warn('EmptyCartReducer', action);

            return data = []


        case INCRIMENT_TO_CART:

            let updatedIncrement = data.map((item) => item.id === action.data ? { ...item, quantitiy: item.quantitiy + 1 } : item)

            return updatedIncrement

        case DECREMENT_TO_CART:

            let updatedDecrement = data.map((item) => item.id === action.data && item.quantitiy > 1 ? { ...item, quantitiy: item.quantitiy - 1 } : item)

            return updatedDecrement

        default: return data
    }
}
export default cardReducer