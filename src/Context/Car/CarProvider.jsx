import React, {useReducer} from 'react';
import CartCounter from "../../components/Atom/CartCounter";
import {ADD_TO_CARD} from "./CarActions";

const carReducer = (state, action)=>{
    if(action.type === ADD_TO_CARD ) return {cart: state.card.concat(action.course)};

    return state;
};

const  CarProvider = ({children}) => {
    useReducer(carReducer, initialState);
    return(<CartCounter.Provider value={}>
      {children}
  </CartCounter.Provider>);
};