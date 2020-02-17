import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import Styled from 'styled-components';

const StyledButton = Styled(Button)`
  width: 100%;
  border: 2px solid #ccc;
  img {
    height: 50px;
    width: 100%;
  }
`;

export default ({ children, name, onClick, value, checked }) => {
  const click = useCallback(() => {
    onClick(name, value);
  }, [name, onClick]);
  return (
    <StyledButton variant={checked ? 'primary' : 'light'} onClick={click}>
      {children}
    </StyledButton>
  );
};
