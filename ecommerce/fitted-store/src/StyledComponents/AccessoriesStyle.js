import styled from "styled-components";

export const MainContainer = styled.div`
 
grid-area: home;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
justify-content: center;
align-items: center;
margin-left: 50px;
padding: 20px;
height: auto;


    @media screen and (max-width: 800px) {
        
        display: flex;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        align-items: center;
        text-align: center;}

`