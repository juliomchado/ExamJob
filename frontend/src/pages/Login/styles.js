import styled from 'styled-components';

import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  height: 100vh;

`;

export const NewForm = styled(Form)`
  width: 342px;
  height: 423px;
  box-shadow: 0px 3px 6px #00000029;
  padding: 0 58.5px;

  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 26.5px;
  }

  button {
    position: relative;
    top: 13px;
  }

  img {
    position: relative;
    top: -25px;
  }
`;
