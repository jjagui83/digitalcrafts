import styled from "styled-components";

export const UserButton = styled.button`
  height: 40px;
  width: 90px;
  border: none;
  background-color: #5885af;
  color: #efebe0;
  border-radius: 2px;
`;

export const UserPicture = styled.img`
  border-radius: 30%;
  height: 60px;
  width: 60px;
`;

export const HeaderHeader = styled.h1`
  color: #385E72;
  font-family: "Roboto", sans-serif;
`;
export const HeaderContainer = styled.div`
  background-color: #385E72;
  grid-area: header;
  display: flex;
  flex-direction: row;
`;