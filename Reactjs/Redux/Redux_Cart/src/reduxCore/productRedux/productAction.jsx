import { PRODUCT_LIST , PRODUCT_SET } from "../Constant";

 const productList = (data) => {
    return {
        type:PRODUCT_LIST,
        data:'apple'
    }
}

export const productListData = (data) => {
    return {
        type:PRODUCT_SET,
        data:data
    }
}
export default productList

