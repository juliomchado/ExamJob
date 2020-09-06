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
  width: 907px;
  height: 459px;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  padding: 50px 40px 50px 40px ;

  img {
    width: 45%;
    height: 371px;
  }

  div {
    width: 60px;
    flex: 1;
    margin-left: 30px;
  }

  div h3 {
    color: #00145F;
    text-align: left;
    font-size: 25px;
    margin-bottom: 25px;
  }

  div p {
    color: #00145F;
    text-align: left;
    font-size: 20px;
    margin-bottom: 25px;
  }

  button {
    position: relative;
    left: 30%;
    margin-right: 25px;
    margin-top: 5px;
  }


`;
