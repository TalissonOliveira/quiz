import styled from 'styled-components';

const Button = styled.button`
  background: #E91E63;
  color: #FFFFFF;
  width: 283px;
  height: 36px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  letter-spacing: 1.25px;

  cursor: pointer;
  pointer-events: all;
  transition: filter .2s;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
              0px 2px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: #979797;
    pointer-events: none;
  }
`;

export default Button;
