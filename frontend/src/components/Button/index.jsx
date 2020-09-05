import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Button = ({
  children, icon, text, color,
}, ...rest) => (
  <Container {...rest} style={color && { borderColor: color, color }}>
    {children}
  </Container>
);

export default Button;
