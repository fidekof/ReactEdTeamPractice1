import {applyMiddleware, combineReducers, createStore} from "redux";
import {ADD_TO_CARD, GET_COURSE_LIST, REMOVE_FROM_CARD} from "../Actions";
import { composeWithDevTools } from 'redux-devtools-extension'
import {axios} from 'axios';
import thunk from "redux-thunk";
const initialStore = {
    cart: [],

};

const initialCourses = {
courses: [  ]
};

const courseCarReducer =  (state = initialStore, {type, id}) => {
    if(type === ADD_TO_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart:state.cart.concat(id))};
    }else
    if(type === REMOVE_FROM_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart.filter(e=>e!==id):state.cart)};
    }
    return state;
};


const coursesReducer = (state = initialCourses, action)=>{
    if(action.type === GET_COURSE_LIST){return {...state, courses: action.courses};}
    return state;
};

export default createStore(combineReducers({courseCarReducer, coursesReducer}), composeWithDevTools(applyMiddleware(thunk)))