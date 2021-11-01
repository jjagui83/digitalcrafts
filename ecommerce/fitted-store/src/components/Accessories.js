import React from 'react'
import { MainContainer } from '../StyledComponents/AccessoriesStyle'
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/CartAction";


export default function Accessories(props) {
    const {item} = props;
    const dispatch = useDispatch()
    // const dispatch= useDispatch();
    
    return (
        <MainContainer>
            
            {item?.map((item)=> {
                
                return (
                    <div className="item">
                    <h1>{item?.img}</h1>
                    <h2>{item?.item}</h2>
                    <h2>{item?.price}</h2>
                    <button onClick={()=> addToCart(dispatch,item)}>Add To Cart</button>
                </div>
                );
            })}
         
        </MainContainer>
    );
};