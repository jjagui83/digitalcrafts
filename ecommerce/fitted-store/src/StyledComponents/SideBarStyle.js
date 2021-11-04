import styled from 'styled-components';

export const SidebarContainer = styled.div`
  grid-area: home;
  
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  background-color:#C0C0C0;
  
  width: 430px;
  padding: 20px;
  position:relative; left:20px; bottom:2px; 
  font-size: 25px;


  /* @media screen and (max-width: 800px) {
        grid-area: header;
        display: flex;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        align-items: center;
        text-align: center;}; */

   
    

`;