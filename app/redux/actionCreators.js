import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://royaldine-daddb-default-rtdb.firebaseio.com/dishes.json")
    // .then(response => dispatch(loadDishes(response.data)))
    .then(response => console.log(response))
    .catch(err => console.log(err))
}