/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Head from 'next/head';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';

function QuestionWidget({ question, questionIndex, totalQuestions }) {
  const questionId = questionIndex;
  const [answer, setAnswer] = useState();

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        src="https://via.placeholder.com/400x400"
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p
          style={{
            fontSize: '12px',
            lineHeight: '14px',
            marginBottom: '24px',
          }}
        >
          {question.description}
        </p>

        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Alternative
                as="label"
                htmlFor={alternativeId}
                onClick={() => setAnswer(alternativeIndex)}
              >
                <input type="radio" id={alternativeId} name={questionId} />
                {alternative}
              </Widget.Alternative>
            );
          })}
        </form>

        <Button type="submit" className="button" disabled={answer === undefined}>
          CONFIRMAR
        </Button>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const currentQuestion = 0;
  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Marvel Quiz</title>
      </Head>
      <QuizContainer>
        <QuestionWidget
          question={question}
          questionIndex={currentQuestion}
          totalQuestions={totalQuestions}
        />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TalissonOliveira" />
    </QuizBackground>
  );
}
