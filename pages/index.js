import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import Head from 'next/head'


const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
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
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TalissonOliveira" />
    </QuizBackground>
  )
}
