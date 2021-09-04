import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import { questions } from '../../../db.json';

const Answers = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;

  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  div {
    background: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    align-items: center;
    width: 268px;
    height: 36px;
    padding: 0px 7px;
    margin-bottom: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};

    font-size: 14px;
    line-height: 16.8px;
    white-space: pre;

    overflow-x: auto;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.tertiary};

    &:last-child {
      margin-bottom: 0px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.tertiary};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 20px;
    }
  }
`;

function ResultScreen() {
  const { query } = useRouter();
  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>
      <Widget.Content>
        <p style={{
          marginBottom: '8px',
          lineHeight: '16.8px',
        }}
        >
          Mandou bem,
          {' '}
          {query.name}
          !
        </p>
        <h2 style={{
          marginBottom: '21px',
          fontSize: '18px',
          lineHeight: '21.6px',
        }}
        >
          Você fez 100 pontos, parabéns!
        </h2>
        <Answers>
          {questions.map((item) => {
            console.log('teste');
            return (
              <div>
                {item.title}
              </div>
            );
          })}
        </Answers>
      </Widget.Content>
    </Widget>
  );
}

export default ResultScreen;
