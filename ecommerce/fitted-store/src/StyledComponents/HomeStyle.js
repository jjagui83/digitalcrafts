import styled from "styled-components";



export const MainContainer = styled.div `
grid-area: home;
display: flex;
flex-direction: column;
/* width: 800px; */
height: auto; 
background-color:#274472;
align-items: center;
padding: 20px;
margin: 50px;
font-size: 25px;



@media screen and (max-width: 700px) {
        
        display: flex;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        align-items: center;
        text-align: center;};

   
    


`;