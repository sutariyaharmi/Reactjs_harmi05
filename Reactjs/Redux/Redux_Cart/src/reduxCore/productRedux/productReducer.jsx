import { PRODUCT_LIST , PRODUCT_SET } from "../Constant";

const productReducer  = (data=[] , action) => {
    switch(action.type){
        case PRODUCT_LIST:
        // console.warn('productReducer' , action);  
        return[action.data]

        
        case PRODUCT_SET:
            // console.warn('productReducer' , action);
            return[action.data]
            default:return data
        }
    }


export default productReducer