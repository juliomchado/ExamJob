import React, { useCallback, useEffect, useState} from 'react';

import { Container } from './styles';

const Input = ({ name ,type, label, value}, ...rest) => {
  const [inputValue, setInputValue] = useState([])

  const handleState = useCallback((e) => {
    setInputValue([...inputValue, e])
  }, [])

  useEffect(() => {
    if(value){
      handleState(value)
    }
  }, [])

  return (
    <Container>
    <label htmlFor="input">{label}</label>
    <input name={name} type={type} placeholder={label} value={inputValue} onChange={(e) => handleState(e.target.value)} {...rest} />
  </Container>

)
}

export default Input;
