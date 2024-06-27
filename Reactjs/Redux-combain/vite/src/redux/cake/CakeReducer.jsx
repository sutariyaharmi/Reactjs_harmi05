import { BUY_CAKE } from "./CakeConstant";

const initialstate = {
 numOfcake:10,
}
const Cakereducer = (state = initialstate, action) =>{
    switch(action.type){
        case BUY_CAKE :{
            if(state.numOfcake<=0){
                return{
                    ...state,
                    numOfcake:state.numOfcake = 0
                }
            }
            else{
                
                return{
                    ...state,
                    numOfcake:state.numOfcake-1
                } 
            }
        }
      
        default: return state
            }
            }

export default Cakereducer