import React from 'react'
import { MainContainer } from '../StyledComponents/CartStyle';

export default function Cart(props) {
    const {fitted} = props;
    
    return (
        <MainContainer>
            
           
            {fitted?.map((fitted)=> {
                return (
                    <div className="fitted">
                    {fitted?.img}
                    <h2>{fitted?.item}</h2>
                    <h2>{fitted?.price}</h2>
                  
                    <button>Remove Item</button>
                    
                </div>
                )
            })}
           
        </MainContainer>
    )
}
