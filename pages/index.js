import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  p:first-child {
    margin-bottom: 33px;
    line-height: 17px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: #F9F9FF;
  width: 281px;
  height: 38px;
  padding-left: 16px;
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border: 1px solid #3B426D;
  border-radius: 3.5px;
  outline: none;

  &::placeholder {
    color: #A0A6CB;
  }

  &:focus {
    border: 2px solid #0d47a1;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.13);
  }
`;

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

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function handleButton(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Marvel Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Marvel Studios</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre o universo Marvel!</p>
            <form onSubmit={handleButton}>
              <Input
                placeholder="Digite seu nome para jogar :)"
                onChange={(text) => setName(text.target.value)}
              />
              <Button type="submit" className="button" disabled={name.length === 0}>
                JOGAR
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TalissonOliveira" />
    </QuizBackground>
  );
}
