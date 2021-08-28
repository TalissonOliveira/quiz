import styled from 'styled-components';

const QuizContainer = styled.div`
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

export default QuizContainer;
