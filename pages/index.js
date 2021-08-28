import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';

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
                placeholder="Digite seu nome para jogar"
                onChange={(text) => setName(text.target.value)}
                name="Nome do usuário"
                value={name}
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
