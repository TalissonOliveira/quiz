import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = styled.input`
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  width: 281px;
  height: 38px;
  padding-left: 16px;
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border: 1px solid #3B426D;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  &::placeholder {
    color: #A0A6CB;
  }

  &:focus {
    border: 2px solid #0d47a1;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.13);
  }
`;

export default function Input({ placeholder, onChange }) {
  return (
    <div>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
