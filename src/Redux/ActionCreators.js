import {ADD_TO_CARD, GET_COURSE_LIST, REMOVE_FROM_CARD} from "./Actions";
import axios from "axios";

const addToCart = id => ({
    type: ADD_TO_CARD,
    id: id,
});


const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CARD,
        id: id
    }
};

const getCourseList = () => dispatch => {
    axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
        .then(resp => {
            return dispatch({type: GET_COURSE_LIST, courses: resp.data})
        });
};




export{ addToCart, removeFromCart, getCourseList}