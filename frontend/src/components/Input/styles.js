import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  border-bottom: 1px solid #00DCB7;
  height: auto;

  width: 100%;

  label{
    font-size: 11px;
    color: #00DCB7;
    font-weight: 500;
  }

  input {
    height: 15px;
    background: none;
    font-size: 14px;
    color: #707070;
    margin: 2px 0 4px 0;

    border: none;
    outline: none;
    padding: 0 0 0 2px;


    &::placeholder {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
