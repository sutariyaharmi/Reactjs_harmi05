import Cakereducer from "./cake/CakeReducer";
import{createStore} from "redux";
// import {ComposeWithDevTools} from "redux-devtools-extension";
// import logger from "redux-logger";

 const store = createStore(Cakereducer)

 export default store