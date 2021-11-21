import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  grid-area: formcontainer;

  justify-content: right;
  align-items: center;
  background-color:grey;
`;

export const InputContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: right;
align-items: center;
width: 50vh;
gap: 15px;
border-radius: 8px;
width: 250px;
height: 400px;
background-color: #B7CFDC;

`;

export const UsernameInput = styled.input`

border-radius: 10px;
height: 30px;
width: 75%;
padding-right: 25px;
`;
export const Password = styled.input `
border-radius: 10px;
height: 30px;
width: 75%;
padding-right: 25px;

`;
export const LoginInput = styled.input `
border-radius: 10px;
height: 30px;
width: 75%;
padding-right: 25px;
`
export const Checkbox = styled.input`

`