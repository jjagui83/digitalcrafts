import { ADD_TOCART } from "../action-types/AddCart";

const inititalState = [];


const Cart = (state= inititalState,action) => {
    switch(action.type){
    case ADD_TOCART:
        return [...state, action.payload]

        default:
            return state;
    }
}
export default Cart;