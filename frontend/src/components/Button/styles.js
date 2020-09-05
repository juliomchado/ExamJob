import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 136px;
  height: 43px;

  border: 1px solid #00DCB7;
  background-color: transparent;


    color: #00DCB7;

  justify-content: center;
  align-items: center;
  text-align: center;

  span{
    font-size: 14px;
    font-weight: bold;
  }

  svg {
    position: relative;
    top: 1px;
    width: 13px;
    height: 13px;
    margin-right: 10px;
  }

`;
