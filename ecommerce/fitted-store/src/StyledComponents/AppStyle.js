import styled from "styled-components";


export const MainContainer = styled.div`

    
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-areas:
        "header header header header"
        "sidebar home home home"
        "sidebar home home home"
        "sidebar footer footer footer";
    grid-template-rows: auto;
    max-width: 2300px;
    height:2700px;
    background-color: #5885AF;

    @media screen and (max-width: 800px) {
    .mainContainer {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        margin: 60px;
        padding: 5;
        
        grid-gap: 20px;
    }
}
`
    
  
