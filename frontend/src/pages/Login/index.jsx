import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import ButtonComponent from '../../components/Button';

import { Container, Form } from './styles';

import Logo from '../../assets/Logo.svg';

const Login = () => {
  const history = useHistory();

  const handleSubmitButton = useCallback((e) => {
    e.preventDefault();
    history.push('/articles');
  }, []);

  return (
    <Container>
      <Form action="submit">
        <img src={Logo} alt="Lead Up" />
        <Input type="text" label="E-mail" />
        <Input type="password" label="Senha" />
        <ButtonComponent onClick={handleSubmitButton}>Entrar</ButtonComponent>
      </Form>
    </Container>
  );
};

export default Login;
