import React from 'react';

import { Container } from './styles';

const Input = ({ type, label }, ...rest) => (
  <Container>
    <label htmlFor="input">{label}</label>
    <input type={{ type }} placeholder={label} {...rest} />
  </Container>
);

export default Input;
