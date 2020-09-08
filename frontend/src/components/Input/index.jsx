import React, {
  useEffect,
  useRef,

} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({
  name, label, containerStyle = {}, ...rest
}) => {
  const inputRef = useRef(null);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle = {}}>
      <label htmlFor="input">{label}</label>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <h1>Aconteceu um erro</h1>}
    </Container>
  );
};

export default Input;
