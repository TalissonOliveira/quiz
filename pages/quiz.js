/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Head from 'next/head';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Widget from '../src/components/Widget';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import ResultScreen from '../src/components/ResultScreen';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const isCorrectAlternative = selectedAlternative === question.answer;
  const questionId = questionIndex;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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

        <AlternativesForm onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 3 * 1000);
        }}
        >
          <div>
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative_${alternativeIndex}`;
              const isSelected = selectedAlternative === alternativeIndex;
              const alternativeStatus = isCorrectAlternative ? 'SUCCESS' : 'ERROR';

              return (
                <Widget.Alternative
                  as="label"
                  key={alternativeId}
                  htmlFor={alternativeId}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                >
                  {alternative}
                  <input type="radio" id={alternativeId} name={questionId} />
                </Widget.Alternative>
              );
            })}
          </div>
          <Button type="submit" className="button" disabled={!hasAlternativeSelected}>
            CONFIRMAR
          </Button>
        </AlternativesForm>

        {isQuestionSubmited && isCorrectAlternative && <span>Alternativa correta</span>}
        {isQuestionSubmited && !isCorrectAlternative && <span>Alternativa errada</span>}
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const [screenStatus, setScreenStatus] = useState('QUIZ');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const totalQuestions = db.questions.length;

  function handleSubmitQuestion() {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreenStatus('RESULT');
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Marvel Quiz</title>
      </Head>
      <QuizContainer>
        {screenStatus === 'QUIZ' && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuestion}
          />
        )}
        {screenStatus === 'RESULT' && <ResultScreen />}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TalissonOliveira" />
    </QuizBackground>
  );
}
