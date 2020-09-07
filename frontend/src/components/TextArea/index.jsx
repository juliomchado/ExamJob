import React, { useState, useCallback, useEffect} from 'react';

import { Container } from './styles';

const TextArea = ({value}, ...rest) =>{
  const [inputValue, setInputValue] = useState([])

  const handleState = useCallback((e) => {
    setInputValue([...inputValue, e])
  }, [])

  useEffect(() => {
    if(value){
      handleState(value)
    }
  }, [])

return(
  <Container>
    <label htmlFor="textarea">Descrição</label>
    <textarea value={inputValue} name="Descricao" {...rest}  onChange={(e) => handleState(e.target.value)}/>
  </Container>
  )
}

export default TextArea;
