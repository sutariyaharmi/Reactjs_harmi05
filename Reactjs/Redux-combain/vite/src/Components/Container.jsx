import { buy_cake } from "../redux";
import { connect } from "react-redux";

import React from 'react'

const Container = (props) => {
  return (
    <>
    <div>
        <h2>Num of Cakes - {props.numOfcake}</h2>
        <button onClick={props.buy_cake}>click Now</button>
    </div>
   
    
    </>
  )
}

const mapstateToprops = state => {
    return {
        numOfcake : state.numOfcake,
    }
}

const mapDispatchToprops = dispatch => {
    return {
        buy_cake : () => dispatch (buy_cake()),
    }
}


export default connect(mapstateToprops,mapDispatchToprops)(Container)