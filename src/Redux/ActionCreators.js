import { ADD_TO_CARD, REMOVE_FROM_CARD } from "./Actions";

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

export{ addToCart, removeFromCart }