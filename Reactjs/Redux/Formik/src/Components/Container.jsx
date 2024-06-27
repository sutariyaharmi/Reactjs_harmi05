// import { buy_cake } from "../redux";
// import { connect } from "react-redux";
// import { buy_chocalate } from "../redux/cake/CakeAction";

// import React from 'react'

// const Container = (props) => {
//   return (
//     <>
//     <div>
//         <h2>Num of Cakes - {props.numOfcake}</h2>
//         <button onClick={props.buy_cake}>click Now</button>
//     </div>
//     <div>
//         <h2>Num of Chocalate - {props.numOfchocalate}</h2>
//         <button onClick={props.buy_chocalate}>click Now</button>
//     </div>
       
    
//     </>
//   )
// }

// const mapstateToprops = state => {
//     return {
//         numOfcake : state.numOfcake,
//         numOfchocalate : state.numOfchocalate
//     }
// }

// const mapDispatchToprops = dispatch => {
//     return {
//         buy_cake : () => dispatch (buy_cake()),
//         buy_chocalate : () => dispatch (buy_chocalate())
//     }
// }


// export default connect(mapstateToprops,mapDispatchToprops)(Container)