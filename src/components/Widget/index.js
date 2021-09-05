import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }

  h1, h3 {
    font-size: 16px;
    line-height: 19.2px;
    font-weight: 700;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    display: block;

    color: ${({ theme }) => theme.colors.links};
    text-decoration: none;

    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    text-align: center;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8)
    }
  }
`;

Widget.Alternative = styled.a`
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  width: 283px;
  height: 36px;
  padding-left: 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};

  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;

  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: brightness(.8);
  }

  &:last-child {
    margin-bottom: 24px;
  }
  
  input {
    display: none;
  }
`;

export default Widget;
