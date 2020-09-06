import React from 'react';

import { Container } from './styles';

const Button = ({
  children, icon, text, color, width, ...rest
}) => (
  <Container {...rest} style={color || width ? { borderColor: color, color, width } : {}}>
    {children}
  </Container>
);

export default Button;
