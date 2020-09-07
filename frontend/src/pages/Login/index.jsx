import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

import Logo from '../../assets/Logo.svg';

const Login = () => {
  const history = useHistory();

  const handleSubmitButton = useCallback((e) => {
    e.preventDefault();
    history.push('/articles');
  }, [history]);

  return (
    <Container>
      <Form action="submit">
        <img src={Logo} alt="Lead Up" />
        <Input name="email" type="text" label="E-mail" />
        <Input name="password" type="password" label="Senha" />
        <Button onClick={(e) => handleSubmitButton(e)}>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
