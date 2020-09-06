import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 1789px;
  margin: 49px auto 0 auto;
  height: 100vh ;


  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 117.43;
  }

  img {
    position: relative;
    top: 0;
    left: 0;
    width: 159.7px;
    height: 105px;
    margin-top: 6px;
  }

  button {
    position: relative;
    top: 0;
  }

`;

export const Main = styled.main`
  margin-top: 117.43px;

  div:nth-child(1) {
    margin-bottom: 29px;
  }

  div h1{
    color: #00145F;
    font-size: 50px;
    font-weight: 900;
  }

`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;

  flex-wrap: wrap;

`;

export const Card = styled.div`
  width: 349px;
  height: 515px;
  padding: 27px 26px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #00DCB7;


  div > button:nth-child(2){
    margin-left: 19px;
  }

`;

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    img {
      width: 244px;
      height: 244px;
      cursor: pointer;
    }

    span{
      font-size: 25px;
      font-weight: bold;
      margin: 8px 0 8px 0;
      color: #00145F;
    }

    p{
      text-align: center;
      font-size: 20px;
      color: #00145F;
      width: 292px;
      height: 84px;
    }

`;
