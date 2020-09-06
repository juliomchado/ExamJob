import styled from 'styled-components';

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
  width: 539px;
  height: 145px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;
  padding: 15px;

  justify-content: center;
  align-items: center;

  h3{
    color: #00145F;
    font-weight: bold;
    font-size: 25px;
  }

  svg{
    position: relative;
    width: 14.86px;
    height: 14.86px;
    cursor: pointer;
    left: 48%;
    top: -35px;
  }

`;
