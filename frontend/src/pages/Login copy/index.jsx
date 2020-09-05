import React from 'react';

import Input from '../../components/Input';
import ButtonComponent from '../../components/Button';

import { Container, Form } from './styles';

import Logo from '../../assets/Logo.svg';

const Login = () => (
  <Container>
    <Form action="submit">
      <img src={Logo} alt="Lead Up" />
      <Input type="text" label="E-mail" />
      <Input type="password" label="Senha" />
      <ButtonComponent text="Entrar" />
    </Form>
  </Container>
);

export default Login;
