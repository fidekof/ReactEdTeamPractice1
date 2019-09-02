import React from 'react';
import {connect} from 'react-redux';
const CartCounter = ()=>{
    return(<li><button className="button tiny ghost">{`Carrito:  0`}</button></li>);
};
export default CartCounter;
