import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/TalissonOliveira/quiz">
        <img src="https://octodex.github.com/images/spidertocat.png" alt="Logo GitHub" />
      </a>
      <p>
        Visite o projeto no
        {' '}
        <a href="https://github.com/TalissonOliveira/quiz" target="_blank" rel="noreferrer">
          <span>GitHub</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
