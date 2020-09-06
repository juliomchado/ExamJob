import React from 'react';

import { Container } from './styles';

const Button = ({
  children, icon, text, color, addButton, ...rest
}) => {
  const addButtonStyles = addButton && 151;

  return (
    <Container {...rest} style={color && { borderColor: color, color, width: addButtonStyles }}>
      {children}
    </Container>
  );
};

export default Button;
