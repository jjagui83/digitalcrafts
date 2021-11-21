import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  /* width: 1400px; */
  display: grid;
  grid-template-areas:
    "header header header header"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar footer footer footer";
  grid-template-rows: auto;
  
  
`;