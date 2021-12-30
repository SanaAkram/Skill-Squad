import React from 'react'
import { AccountBox } from './accountBox';
import styled from "styled-components";

const AppContainer = styled.div`
 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Account = () => {
  return (
    <AppContainer>
    
         <AccountBox />
         </AppContainer>
     
  )
}
export default Account;