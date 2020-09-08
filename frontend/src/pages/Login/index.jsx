import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, NewForm } from './styles';

import Logo from '../../assets/Logo.svg';

import { UserLogin } from '../../store/modules/content/actions';
import api from '../../services/api';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (data) => {
    const response = await api.get('user');

    const verifyEmailExists = response.data.find((user) => user.email === data.email);
    const verifyCorretPassword = response.data.find((user) => user.password === data.password);

    if (!verifyEmailExists || !verifyCorretPassword) {
      return alert('Email ou senha errada');
    }

    const userId = verifyEmailExists.id;

    dispatch(UserLogin(userId));
    history.push('/articles');
  }, [history]);

  return (
    <Container>
      <NewForm onSubmit={handleSubmit}>
        <img src={Logo} alt="Lead Up" />
        <Input name="email" label="E-mail" />
        <Input name="password" type="password" label="Senha" />
        <Button type="submit">Entrar</Button>
      </NewForm>
    </Container>
  );
};

export default Login;
