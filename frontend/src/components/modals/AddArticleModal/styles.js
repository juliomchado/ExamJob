import styled from 'styled-components';

import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00EAB673;


  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 342px;
  height: 498px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;

  align-items: center;
  justify-content: space-evenly;
  padding: 29px 58px 29px 58px;

  h3{
    color: #00145F;
    font-weight: bold;
    font-size: 25px;
  }

  & div {
    margin-bottom: 25px;
  }

  & button {
    margin-top: 10px;
  }


`;

export const CloseIcon = styled(FiX)`
  width: 14.85px;
  height: 14.85px;
  position: relative;
  top: -20px;
  right: -60%;
  cursor: pointer;

`;
