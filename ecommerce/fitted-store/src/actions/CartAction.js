import { ADD_TOCART } from "../action-types/AddCart";




export const addToCart= (dispatch, fitted) => {
    dispatch({type: ADD_TOCART, payload:fitted})
}