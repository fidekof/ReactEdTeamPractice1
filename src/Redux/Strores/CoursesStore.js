import {createStore} from "redux";
import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../Actions";
import { composeWithDevTools } from 'redux-devtools-extension'
import {axios} from 'axios';
const initialStore = {
    cart: [],
    courses: [],
};

const courseCarReducer =  (state = initialStore, {type, id}) => {
    if(state.courses.length<1) state = {...state, courses: initialCourses}
    if(type == ADD_TO_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart:state.cart.concat(id))};
    }else
    if(type == REMOVE_FROM_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart.filter(e=>e!==id):state.cart)};
    }
    return state;
};

const initialCourses = () =>
{
    axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos').then(resp => resp.data)
};


export default createStore(courseCarReducer, composeWithDevTools())