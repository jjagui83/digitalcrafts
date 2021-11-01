import React from 'react';
import {addToCart} from "../actions/CartAction";
import {useDispatch} from "react-redux";
import "../cssStyle/fitted.css"


export default function Fitted(props) {
    const {fitted} = props;
    const dispatch= useDispatch();
    
    return (
        <div className="mainContainer">
            
            {fitted?.map((fitted)=> {
                
                return (
                    <div className="fitted">
                    <h1>{fitted?.img}</h1>
                    <h2>{fitted?.item}</h2>
                    <h2>{fitted?.price}</h2>
                    <button onClick={()=> addToCart(dispatch,fitted)}>Add To Cart</button>
                </div>
                );
            })}
         
        </div>
    );
};


