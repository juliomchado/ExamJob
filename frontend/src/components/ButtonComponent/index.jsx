import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './styles';

const ButtonComponent = ({ icon, text }) => {
  const history = useHistory();

  const handleSubmitButton = useCallback((e) => {
    e.preventDefault();
    history.push('/articles');
  }, []);

  return (
    <Button onClick={handleSubmitButton}>{text}</Button>

  );
};

export default ButtonComponent;
