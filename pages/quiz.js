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

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  answer,
  setAnswer,
  onSubmit,
}) {
  const questionId = questionIndex;

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

        <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        >
          <div>
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative_${alternativeIndex}`;
              return (
                <Widget.Alternative
                  as="label"
                  htmlFor={alternativeId}
                  onClick={() => setAnswer(alternativeIndex)}
                >
                  {alternative}
                  <input type="radio" id={alternativeId} name={questionId} />
                </Widget.Alternative>
              );
            })}
          </div>
          <Button type="submit" className="button" disabled={answer === undefined}>
            CONFIRMAR
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const [answer, setAnswer] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;

  function handleSubmit() {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

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
          answer={answer}
          setAnswer={setAnswer}
          onSubmit={handleSubmit}
        />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TalissonOliveira" />
    </QuizBackground>
  );
}
