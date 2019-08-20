import {combineReducers, createStore} from "redux";
import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../Actions";
import { composeWithDevTools } from 'redux-devtools-extension'
import {axios} from 'axios';
const initialStore = {
    cart: [],

};

const initialCourses = {
courses: [  {
    "id": 1,
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 40,
    "profesor": "Beto Quiroga"
},
    {
        "id": 2,
        "titulo": "Drupal desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
        "price": 30,
        "profesor": "Beto Quiroga"
    },
    {
        "id": 3,
        "titulo": "Go desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
        "price": 50,
        "profesor": "Alexys Lozada"
    },
    {
        "id": 4,
        "titulo": "HTML desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
        "price": 10,
        "profesor": "Alvaro Felipe"
    }],}

const courseCarReducer =  (state = initialStore, {type, id}) => {
    if(type == ADD_TO_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart:state.cart.concat(id))};
    }else
    if(type == REMOVE_FROM_CARD){
        return {...state, cart: (state.cart.find((dato)=>dato===id)?state.cart.filter(e=>e!==id):state.cart)};
    }
    return state;
};


const coursesReducer = (state = initialCourses, {type, id})=>
{
    return state;
};

const initialCoursesF = () => axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos').then(resp => resp.data);


export default createStore(combineReducers({courseCarReducer, coursesReducer}), composeWithDevTools())