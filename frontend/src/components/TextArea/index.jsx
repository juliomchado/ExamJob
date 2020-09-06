import React from 'react';

import { Container } from './styles';

const TextArea = () => (
  <Container>
    <label htmlFor="textarea">Descrição</label>
    <textarea name="Descricao" />
  </Container>

);

export default TextArea;
